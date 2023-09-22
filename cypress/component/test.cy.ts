import { html } from "lit";
import "../../src/components/App";

describe("test.cy.ts", () => {
  it("playground", () => {
    // When
    cy.mount(html`<todo-list></todo-list>`);

    // Then
    cy.get("todo-list").shadow().findByRole("heading", { name: "Todo list" }).should("be.visible");
    cy.get("todo-list")
      .shadow()
      .find("todo-input")
      .shadow()
      .findByLabelText("What do I need ?")
      .should("be.visible");
  });
});
