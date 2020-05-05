import { storiesOf, html } from '@rubik/storybook';

import '../textbox-component.js';

const type=["text","number"];

storiesOf('Connected | Textbox', module).add('text', () => {
  return html`
    <textbox-component  .type="${type[0]}"></textbox-component>
  `;
});
storiesOf('Connected | Textbox', module).add('number', () => {
  return html`
    <textbox-component  .type="${type[1]}"></textbox-component>
  `;
});
