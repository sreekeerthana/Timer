import { storiesOf, html } from '@rubik/storybook';

import '../clock-timer-component.js';

storiesOf('Connected | clock-timer', module).add('counter', () => {
  return html`
              <clock-timer-component></clock-timer-component>
            `;
});
