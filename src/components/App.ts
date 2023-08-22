import { html, css } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import Item from "../types/Item.types"

import LitComponent from "./Mixins/LitComponent"
import "./Icons/Flame"
import "./TodoInput"
import "./TodoItem"

@customElement("todo-list")
export default class TodoList extends LitComponent {
  @property()
  title = "Todo list"

  @state()
  lastUnusedId = 0
  todoList: Item[] = []

  addItem(e: CustomEvent) {
    const text = this.$getMessage(e)
    this.todoList = [
      ...this.todoList,
      { id: this.lastUnusedId, text, checked: false },
    ]
    this.lastUnusedId++
  }

  editItem(e: CustomEvent) {
    const newItem = this.$getMessage(e)
    this.todoList = this.todoList.filter((item) => item.id !== newItem.id)
    this.todoList = [...this.todoList, newItem].sort(this._sortById)
    this.requestUpdate()
  }

  deleteItem(e: CustomEvent) {
    const id = this.$getMessage(e)
    this.todoList = this.todoList.filter((item) => item.id !== id)
    this.requestUpdate()
  }

  todoListItem(item: Item) {
    return html`<li>
      <todo-item
        @edit=${this.editItem}
        @delete=${this.deleteItem}
        .item=${item}
      ></todo-item>
    </li>`
  }

  _sortById(itemA: Item, itemB: Item) {
    return itemA.id - itemB.id
  }

  render() {
    return html`<main class="app">
      <header>
        <h1 class="title"><lit-flame></lit-flame>${this.title}</h1>
        <todo-input @add=${this.addItem}></todo-input>
      </header>
      <ul class="list">
        ${this.todoList.map((item) => this.todoListItem(item))}
      </ul>
    </main>`
  }

  static styles = css`
    .app {
      background-color: var(--color-secondary, black);
      border-radius: 0.25rem;
      color: var(--color-complementary, white);
      padding: 2rem 3rem;
    }
    .title {
      text-align: center;
    }
    lit-flame {
      fill: var(--color-complementary, white);
      margin-right: 0.5rem;
    }
    .list {
      list-style-type: none;
      padding-left: 0;
    }
    .list li {
      position: relative;
    }
    .list li:not(:last-child)::after {
      background-color: var(--color-complementary, white);
      content: "";
      height: 1px;
      width: 100%;
      opacity: 0.3;
      position: absolute;
      bottom: 0;
    }
  `
}
