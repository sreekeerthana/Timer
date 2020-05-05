import { html, LitElement } from 'ing-web/core.js';
import { TestApplicationStyle } from './TestApplication.style.js';
import '../textbox-component/TextboxComponent.js'
import '../button-component/ButtonComponent.js'


export default class TestApplication extends LitElement {

  constructor() {
    super();
    this.timerData = [];
    this.timerObj = {};
    this.btn = "CREATE";
  }

  static get properties() {
    return {
      timerData: { type: Array },
      timerObj: { type: Object },
      formValue: { type: String },
      timerName: { type: String },
      counter: { type: String },
    };
  }
  static get is() {
    return 'test-application';
  }

  static get styles() {
    return [TestApplicationStyle];
  }

  render() {
    return html`
              <div class="bgColor">
                 <div class="mainDiv">
                    <textbox-component placeholder="Enter a timer name"
                                       name="timername" 
                                       id="timername">
                    </textbox-component>
                    <textbox-component type="number"
                                       placeholder="Enter a valid timer time in seconds"
                                       name="timerval" 
                                       id="timerVal">
                    </textbox-component>
                    <button-component @click=${this.createTimer} .btn="${this.btn}"></button-component>
                    <div class="clearfix"></div>
                 </div>
                 <ul class="timer-div">
                   ${this.timerData.map(
      timer => html`
                      <li> <clock-timer-component .timObj=${timer}></clock-timer-component></li>
                                  `
    )}
                </ul>
             </div>
    `;
  }

  createTimer() {
    const timerElement1 = this.shadowRoot.getElementById('timername');
    this.timerName = timerElement1.serializedValue;
    const timerElement = this.shadowRoot.getElementById('timerVal');
    this.formValue = timerElement.serializedValue;
    if(!(this.formValue < 0)){
      this.timerObj = { timerName: this.timerName, timerValue: this.formValue };
      this.timerData.push(this.timerObj);
    }
  }
}