import { html } from 'ing-web/core.js';
import { ButtonComponentStyle } from './ButtonComponent.style.js';
import { LionButton } from '@lion/button/src/LionButton.js';


export default class ButtonComponent extends LionButton {

  constructor() {
    super();
  }

  static get is() {
    return 'button-component';
  }

  static get styles() {
    return [ButtonComponentStyle];
  }

  render() {
    return html`
               <button class="buttonCls">${this.btn}</button>
               `;
  }

}