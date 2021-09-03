import "../App"
import { expect, fixture, html } from "@open-wc/testing"

let app
let appName
describe("App", () => {
  describe("Default", () => {
    beforeEach(async () => {
      app = await fixture(html`<todo-list></todo-list>`)
    })
    it("is accessible", () => {
      expect(app).to.be.accessible()
    })
    it("contains a title with a flame image", () => {
      const title = app.shadowRoot.querySelector("h1")
      expect(title).to.exist
      expect(title.innerHTML).to.contain("<lit-flame></lit-flame>")
    })
    it("contains an input to add todo items", () => {
      const input = app.shadowRoot.querySelector("todo-input")
      expect(input).to.exist
    })
    it("contains an empty list of todo items", () => {
      const list = app.shadowRoot.querySelector("ul")
      expect(list).to.exist
      expect(list).lightDom.to.equal("")
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

  describe("Events", () => {
    beforeEach(async () => {
      app = await fixture(html`<todo-list></todo-list>`)
    })
    describe("@add", () => {
      beforeEach(async () => {
        const input = app.shadowRoot.querySelector("todo-input")
        await fireEvent(input, "add", "toto")
      })
      it("the list contains now an item", () => {
        const list = app.shadowRoot.querySelector("ul")
        expect(list).lightDom.to.equal("<li><todo-item></todo-item></li>")
      })
      it("the item is initialised with the text passed in the event", () => {
        const todoItem = app.shadowRoot.querySelector("todo-item")
        expect(todoItem.item).to.eql({ id: 0, text: "toto", checked: false })
      })
    })
  })
})
