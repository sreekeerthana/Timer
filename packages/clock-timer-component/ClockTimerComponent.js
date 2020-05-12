import { LionLitElement, html, LitElement } from 'ing-web/core.js';
import { ClockTimerComponentStyle } from './ClockTimerComponent.style.js';

export default class ClockTimerComponent extends LitElement {

  constructor() {
    super();
    this.timer = this.timer.bind(this);
    this.timerObj = {};
    this.counterObj = [];
    this.timObj = { timerName: "", timerValue: "" };
    this.pauseBool = true;
    this.resumeBool = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.counterObj = this.timObj;
    this.createTimerCountdown();
  }

  static get is() {
    return 'clock-timer-component';
  }

  static get styles() {
    return [ClockTimerComponentStyle];
  }

  static get properties() {
    return {
      timerValue: { type: String },
      timerName: { type: String },
      counter: { type: String },
      timerObj: { type: Object },
      counterObj: { type: Object },
      pauseBool: { type: Boolean },
    };
  }

  render() {
    return html`
                <div class="wraper" id="wraperId">
                    <div class="title">${this.counterObj.timerName}</div>
                    <div class="timer">${this.timerObj.hours}:${this.timerObj.minutes}:${this.timerObj.seconds}</div>
                    <div class="link">
                       <ul>
                          <li><a @click=${this.deleteTimer} class="deleteTimerCls">delete</a></li>
                              ${this.pauseBool === true ?
        html`
                          <li><a @click=${this.pauseTimer} class="pauseTimerCls">pause</a></li>
                            `: html``}
                              ${this.pauseBool === false ?
        html`
                         <li><a @click=${this.resumeTimer} class="resumeTimerCls">resume</a></li>`
        : html``
      }
    
                        <ul>
                       <div class="clearfix"></div>
                     </div>
                `;
  }

  deleteTimer() {
    this.shadowRoot.getElementById('wraperId').remove();
  }

  pauseTimer() {
    this.pauseBool = false;
    clearInterval(this.counter);
    this.shadowRoot.getElementById('wraperId').style.background = "#c4b731";
  }

  resumeTimer() {
    this.pauseBool = true;
    this.counter = setInterval(this.timer, 1000);
    this.shadowRoot.getElementById('wraperId').style.background = "#2ecc71";
  }

  createTimerCountdown() {
    this.timerName = this.counterObj.timerName;
    this.timerValue = this.counterObj.timerValue;
    this.counter = setInterval(this.timer, 1000);
  }

  timer() {
    if (this.timerValue < 0) {
      this.shadowRoot.getElementById('wraperId').style.background = "#e74c3c";
      this.pauseBool = '';
      this.timerObj = {hours: '00', minutes: '00', seconds: '00'};
      return clearInterval(this.counter);
    }
    var h = Math.floor(this.timerValue / 3600),
      m = Math.floor(this.timerValue / 60) % 60,
      s = this.timerValue % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    this.timerObj = { hours: h, minutes: m, seconds: s }
    this.timerValue--;
  }
}