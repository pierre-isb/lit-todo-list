import "../App";
import { fixture, html } from "@open-wc/testing";
import { getByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

describe("Todo list", () => {
  it("should display a title", async () => {
    // Given
    const component: HTMLElement = await fixture(html`<todo-list></todo-list>`);

    // When
    const title = getByRole(component, "heading", { name: "Todo list" });

    // Then
    expect(title).toBeInTheDocument();
  });
});
