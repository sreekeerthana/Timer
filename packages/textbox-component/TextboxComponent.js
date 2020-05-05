import { LionLitElement, html, LitElement } from 'ing-web/core.js';
import { TextboxComponentStyle } from './TextboxComponent.style.js';
import { LionInput } from '@lion/input/src/LionInput.js';


export default class TextboxComponent extends LionInput {

  constructor() {
    super();
    this.type = 'text';
  }

  static get is() {
    return 'textbox-component';
  }

  static get styles() {
    return [TextboxComponentStyle];
  }
}