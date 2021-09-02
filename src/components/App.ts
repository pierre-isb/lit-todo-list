import { html, css, LitElement } from "lit"
import { customElement, property, state } from "lit/decorators.js"

@customElement("todo-list")
export default class App extends LitElement {
  @property()
  title = "World"

  @state()
  todoList = []

  render() {
    return html`<main class="app">
      <header>
        <h1 class="title">${this.title}</h1>
      </header>
      <ul></ul>
    </main>`
  }

  static styles = css`
    .app {
      color: var(--color-complementary, white);
    }
    .title {
      text-align: center;
    }
  `
}
