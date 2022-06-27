"use strict";
import html from './awc-multi-select.html';
import '../awc-option/awc-option'

export default class AwcMultiSelect extends HTMLElement {
	static get observedAttributes() {
		return ['disabled', 'search'];
	}

    get disabled() {
        return this.getAttribute('disabled');
    }

    set disabled(value) {
        if (value === null || value === false) {
            this.removeAttribute('disabled');
        } else {
            this.setAttribute('disabled', value);
        }
    } 

    get search() {
		return this.getAttribute('search') !== null;
	}

	set search(value) {
		this.setAttribute("search", value);
	}

    get placeholder() {
		return this.getAttribute('placeholder') || 'Please Select Item';
	}

	set placeholder(value) {
		this.setAttribute("placeholder", value);
	}

	constructor() {
		super();
        this._render();
	}

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'disabled' && this._multiSelectedContainerEl) {
            if (newValue !== null) {
                this._multiSelectedContainerEl.disabled = true;
            } else {
                this._multiSelectedContainerEl.disabled = false;
            }
        }
    }

    connectedCallback() {
        this._multiSelectedContainerEl = this.shadowRoot.querySelector('.multiselect');
        this._fieldEl = this.shadowRoot.querySelector('.multiselect-field');
        this._popupEl = this.shadowRoot.querySelector('.multiselect-popup');
        this._listEl = this.shadowRoot.querySelector('.multiselect-list');
        this.disabled = this.disabled;
        this._refreshField();
        this._refreshItems();
        this._attachHandlers();
        // if (this.search) {
        //     this._fieldEl.focus();
        // }
    }

    _attachHandlers() {
        document.addEventListener('mousedown', (event) => {
            const path = event.path || (event.composedPath && event.composedPath());
            const includes = path.some(element => element.id && element.id === this._multiSelectedContainerEl.id);
            if (!includes) {
                this._close();
            }
        });
        this._fieldEl.addEventListener('click', () => {
            if (this.disabled || this.search) {
                return;
            }
            this._isOpened ? this._close() : this._open();
        });
        this._multiSelectedContainerEl.addEventListener('keydown', (event) => {
            if (this.disabled) {
                return;
            }
            this._keyDownHandler(event);
        });
        this._listEl.addEventListener('click', (event) => {
            if (this.disabled) {
                return;
            }
            this._listClickHandler(event)
        });
        if (this.search) {
            const inputEl = this.shadowRoot.querySelector('.multiselect-field-input');
            this._attachSearchHandlers(inputEl);
        }
        
    }

    _attachSearchHandlers(inputEl) {
        inputEl.addEventListener('focus', (event) => {
            this._inputing = true;
            this._togglePopup(true);
        });

        inputEl.addEventListener('blur', (event) => {
            this._inputing = false;
        });

        inputEl.addEventListener('input', (event) => {
            const value = inputEl.value.toLocaleLowerCase();
            const _itemElements = this._itemElements();
            for(let i = 0; i < _itemElements.length; i++) {
                const itemElement = _itemElements[i];
                if (itemElement.textContent.toLocaleLowerCase().includes(value)) {
                    itemElement.style.display = "block";
                } else {
                    itemElement.style.display = "none";
                }
            }
        });
    }

    _keyDownHandler(event) {
        switch(event.key) {
            case 'Backspace':
                this._handleBackspaceKey();
                break;
            case 'Enter':
                this._handleEnterKey();
                break;
            case 'Escape':
                this._handleEscapeKey();
                break;
            case 'ArrowUp':
               this._handleArrowUpKey();
                break;
            case 'ArrowDown':
               this._handleArrowDownKey();
                break;
            default:
                return;
        }
        if (this._inputing) {
            return;
        }
        event.preventDefault();
    }

    _handleBackspaceKey() {
        if (this._inputing) {
            return;
        }
        const selectedItemElements = this.querySelectorAll("awc-option[selected]");
        if(selectedItemElements.length) {
            this._unselectItem(selectedItemElements[selectedItemElements.length - 1]);
        }
    }

    _handleEnterKey() {
        if(this._isOpened) {
            var focusedItem = this._itemElements()[this._focusedItemIndex];
            this._selectItem(focusedItem);
        }
    }

    _unselectItem(item) {
        item.removeAttribute('selected');
        this._dispatchChangeEvent();
        this._refreshField(item, 'remove');
    }

    _dispatchChangeEvent() {
        const selectedItems = this.querySelectorAll('awc-option[selected]');
        const arr = [];
        for(let i = 0; i < selectedItems.length; i++) {
            arr.push({
                value: selectedItems[i].value,
                text: selectedItems[i].textContent
            })
        }
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: arr,
                },
                // bubbles: true
            })
        );
    }

    _refreshField(item, type) {
        if (item) {
            if (type !== 'remove') {
                this._removePlaceholder();
                this._fieldEl.appendChild(this._createTag(item));
                if (this.search) {
                    const placeholder = this._createPlaceholder();
                    this._fieldEl.appendChild(placeholder);
                }
            } else {
                this._removeField(item);
            }
        } else {
            this._fieldEl.innerHTML = '';
            const selectedItems = this.querySelectorAll('awc-option[selected]');
            if(!selectedItems.length) {
                const placeholder = this._createPlaceholder();
                this._fieldEl.appendChild(placeholder);
            } else {
                for(let i = 0; i < selectedItems.length; i++) {
                    this._fieldEl.appendChild(this._createTag(selectedItems[i]));
                }
                if (this.search) {
                    const placeholder = this._createPlaceholder();
                    this._fieldEl.appendChild(placeholder);
                }
            }
        }
    }

    _removeField(item) {
        const value = item.value;
        const cur = this._multiSelectedContainerEl.querySelector(`.multiselect-tag[aria-value='${value}']`);
        if (cur) {
            if (!this.search) {
                this._removePlaceholder();
            }
            this._fieldEl.removeChild(cur);
        }
        const selectedItems = this.querySelectorAll('awc-option[selected]');
        if(!selectedItems.length) {
            this._fieldEl.innerHTML = '';
            const placeholder = this._createPlaceholder();
            this._fieldEl.appendChild(placeholder);
        }
    }

    _removePlaceholder() {
        const placeholder = this._fieldEl.querySelector('.multiselect-field-placeholder');
        if (placeholder) {
            this._fieldEl.removeChild(placeholder);
        } 
    }

    _createPlaceholder() {
        if (this.search) {
            const inputEl = document.createElement('input');
            inputEl.className = 'multiselect-field-placeholder multiselect-field-input';
            const selectedItemElements = this.querySelectorAll("awc-option[selected]");
            if(!selectedItemElements.length) {
                inputEl.placeholder = this.placeholder;
            }
            this._attachSearchHandlers(inputEl);
            return inputEl;
        }
        const placeholder = document.createElement('div');
        placeholder.className = 'multiselect-field-placeholder';
        placeholder.textContent = this.placeholder;
        return placeholder;
    }

    _createTag(item) {
        const tag = document.createElement('div');
        tag.className = 'multiselect-tag';
        tag.setAttribute('aria-value', item.value || item.textContent) ;
        const content = document.createElement('div');
        content.className = 'multiselect-tag-text';
        content.textContent = item.textContent;
        const removeButton = document.createElement('div');
        removeButton.className = 'multiselect-tag-remove-button';
        removeButton.addEventListener('click', (event) => {
            if (this.disabled) {
                return;
            }
            this._removeTag(event, item)
        });

        tag.appendChild(content);
        tag.appendChild(removeButton);
        return tag;
    }

    _open() {
        this._togglePopup(true);
        if (!this.search) {
            this._refreshFocusedItem();
        }
    }

    _togglePopup(show) {
        this._isOpened = show;
        this._popupEl.style.display = show ? 'block' : 'none';
    }

    _refreshFocusedItem() {
        this._itemElements()[this._focusedItemIndex].focus();
    }

    _close() {
        this._togglePopup(false);
    }

    _itemElements() {
        return this.querySelectorAll('awc-option');
    }

    _handleArrowDownKey() {
        this._focusedItemIndex = (this._focusedItemIndex < this._itemElements().length - 1)
                ? this._focusedItemIndex + 1 : 0;
        this._refreshFocusedItem();
    }

    _handleArrowUpKey() {
        this._focusedItemIndex = (this._focusedItemIndex > 0)
                ? this._focusedItemIndex - 1
                : this._itemElements().length - 1;

        this._refreshFocusedItem();
    }

    _handleEscapeKey() {
        this._close();
    }

    _listClickHandler(event) {
        let item = event.target;
        while(item && item.tagName !== 'AWC-OPTION') {
            item = item.parentNode;
        }
        this._selectItem(item);
    }

    _selectItem(item) {
        if(!item.hasAttribute('selected')) {
            item.setAttribute('selected', 'selected');
            this._dispatchChangeEvent();
            this._refreshField(item);
        }

        this._close();
    }

    _refreshItems() {
        const _itemElements = this._itemElements();
        for(let i = 0; i < _itemElements.length; i++) {
            const itemElement = _itemElements[i];
            itemElement.setAttribute("tabindex", -1);
        }
        this._focusedItemIndex = 0;
    }

    _removeTag(event, item) {
        this._unselectItem(item);
        event.stopPropagation();
    }

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-multiselect')) {
	customElements.define('awc-multiselect', AwcMultiSelect);
}
