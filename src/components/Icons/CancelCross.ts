import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("cancel-cross")
export default class Flame extends LitElement {
  static styles = css`
    path {
      fill: inherit;
    }
  `
  render() {
    return html`<svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6 -6 36 36"
      height="24"
      width="24"
    >
      <path
        d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
    l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
    c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
    c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"
      />
    </svg> `
  }
}
