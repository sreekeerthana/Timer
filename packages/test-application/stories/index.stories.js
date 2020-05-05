import { storiesOf, html } from '@rubik/storybook';

import '../test-application.js';

storiesOf('Connected | Test', module).add('application', () => {
  return html`
    <test-application></test-application>
  `;
});
