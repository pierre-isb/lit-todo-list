import { html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import LitComponent from './Mixins/LitComponent'
import Item from '../types/Item.types'
import './Icons/EditPen'
import './Icons/CancelCross'
import './Icons/DeleteTrash'

@customElement('todo-item')
export default class TodoItem extends LitComponent {
    @property({ type: Object })
    item: Item

    @state()
    isEdited = false

    deleteItem() {
        this.$emit('delete', this.item.id)
    }

    editItem(event) {
        event.preventDefault()
        const { checked, id } = this.item
        this.$emit('edit', {
            id,
            text: event.target[0].value,
            checked,
        })
        this.toggleEditItem()
    }

    toggleEditItem() {
        this.isEdited = !this.isEdited
    }

    render() {
        const {
            deleteItem,
            editItem,
            isEdited,
            toggleEditItem,
            item: { text },
        } = this
        return html`
            <div class="item">
                ${(isEdited &&
                    html`<form @submit=${editItem}>
                        <input class="item__input" type="text" value=${text} />
                    </form>`) ||
                html`<p class="item__text" @click=${toggleEditItem}>${text}</p>`}
                <button aria-label="Edit todo item" @click=${toggleEditItem}>
                    ${(isEdited && html`<cancel-cross></cancel-cross>`) ||
                    html`<edit-pen></edit-pen>`}
                </button>
                <button aria-label="Delete todo item" @click=${deleteItem}>
                    <delete-trash></delete-trash>
                </button>
            </div>
        `
    }

    static styles = css`
        .item {
            display: grid;
            grid-template-columns: 8fr 1fr 1fr;
        }

        .item__text,
        .item__input {
            padding: 1rem 0;
            width: 100%;
        }

        .item__text {
            margin: 0;
        }

        .item__input {
            background-color: transparent;
            border: none;
            color: var(--color-primary, red);
            font-size: 1rem;
            font-weight: 700;
        }

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        edit-pen,
        cancel-cross {
            fill: var(--color-complementary, white);
            opacity: 0.7;
        }
        delete-trash {
            fill: var(--color-primary, red);
            opacity: 0.7;
        }
        button:focus-visible {
            outline: 1px solid var(--color-primary, red);
        }
        input:focus-visible {
            outline: none;
            border-bottom: 1px solid var(--color-primary, red);
        }
    `
}
