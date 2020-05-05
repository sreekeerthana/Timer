import { storiesOf, html } from '@rubik/storybook';

import '../button-component.js';

storiesOf('Connected | Button', module).add('btnComponent', () => {
  return html`
              <button-component></button-component>
             `;
});




