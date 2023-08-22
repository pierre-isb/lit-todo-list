import { LitElement } from "lit";

export default class LitComponent extends LitElement {
  $emit(action: string, payload?: any) {
    const event = new CustomEvent(action, {
      bubbles: true,
      composed: true,
      detail: { message: payload },
    });
    this.dispatchEvent(event);
  }

  $getMessage(event: CustomEvent) {
    return event.detail.message;
  }
}
