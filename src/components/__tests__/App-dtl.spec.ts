import { fixture, html } from "@open-wc/testing";
import { getByLabelText, getByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { customElement } from "lit/decorators";
import TodoList from "../App";

@customElement("todo-list-test")
class TodoListTest extends TodoList {
  // retire le shadow DOM
  protected createRenderRoot() {
    return this;
  }
}

describe("Todo list", () => {
  it("should display a title", async () => {
    // Given
    const component: HTMLElement = await fixture(html`<todo-list-test></todo-list-test>`);

    // When
    const title = getByRole(component, "heading", { name: "Todo list" });

    // Then
    expect(title).toBeInTheDocument();
  });

  it.skip("displays an input", async () => {
    // Given
    const component: HTMLElement = await fixture(html`<todo-list-test></todo-list-test>`);

    // When
    const input = getByLabelText(component, "What do I need ?");

    // Then
    expect(input).toBeInTheDocument();
  });
});
