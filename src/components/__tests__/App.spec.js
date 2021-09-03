import App from "../App"
import { expect, fixture, html } from "@open-wc/testing"

let app
let appName
describe("App", () => {
  describe("Default", () => {
    beforeAll(async () => {
      app = await fixture(html`<todo-list></todo-list>`)
    })
    it("contains a title with a flame image", () => {
      const title = app.shadowRoot.querySelector("h1")
      expect(title).to.exist
      expect(title.innerHTML).to.include("<lit-flame></lit-flame>")
    })
  })
  describe("With a title property", () => {
    beforeAll(async () => {
      appName = "todo"
      app = await fixture(html`<todo-list title=${appName}></todo-list>`)
    })
    it("the h1 contains the title", () => {
      const title = app.shadowRoot.querySelector("h1")
      expect(title.innerHTML).to.contain(appName)
    })
  })
})
