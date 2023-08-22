import { html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import LitComponent from './Mixins/LitComponent'

@customElement('todo-input')
export default class TodoItem extends LitComponent {
    addToList = (event: Event) => {
        event.preventDefault()
        const input = event.target[0]
        if (input.value.length) {
            this.$emit('add', input.value)
        }
        input.value = ''
    }

    render() {
        return html`<form @submit=${this.addToList}>
          <input
            class="form-input"
            type="text"
            placeholder="What do I need ?"
            aria-label="What do I need ?"
          />
        </form>`;
    }

    static styles = css`
        .form-input {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid transparent;
            color: var(--color-complementary);
            display: block;
            font-size: 1rem;
            margin: auto;
            outline: none;
            padding: 0.25rem;
            text-align: center;
            transition: border-bottom 0.2s ease-in;
            width: 60%;
        }
        .form-input:focus,
        .form-input:active {
            border-bottom: 1px solid var(--color-primary, red);
        }
    `
}
