import "@testing-library/jest-dom";
import { fixture, html } from "@open-wc/testing";
import { getByLabelText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { customElement } from "lit/decorators";
import TodoInput from "../TodoInput";

// @ts-ignore
@customElement("todo-input-test")
class TodoInputTest extends TodoInput {
  // retire le shadow DOM
  protected createRenderRoot() {
    return this;
  }
}

describe("Todo input", () => {
  it("should fill the input", async () => {
    // Given
    const component: HTMLElement = await fixture(html`<todo-input-test></todo-input-test>`);
    const user = userEvent.setup();

    // When
    const input = getByLabelText(component, "What do I need ?");
    await user.type(input, "toto");

    // Then
    // @ts-ignore
    expect(input).toHaveValue("toto");
  });
});
