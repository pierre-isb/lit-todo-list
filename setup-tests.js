import "regenerator-runtime/runtime"
import { oneEvent } from "@open-wc/testing"

global.fireEvent = async (element, name, payload) => {
  setTimeout(() => {
    const event = new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail: { message: payload },
    })
    element.dispatchEvent(event)
  })
  await oneEvent(element, name)
}
