import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

const sampleRadioButtons = hbs`
  {{bulma-radio name="test" value="cool" id="test-cool"}}

  {{bulma-radio name="test" value="awesome" id="test-awesome"}}
`;

moduleForComponent('bulma-radio', 'Integration | Component | bulma radio', {
  integration: true
});

test('it selects an option', async function(assert) {
  this.render(sampleRadioButtons);

  await click('#test-cool');

  assert.ok(find('#test-cool').checked);
  assert.notOk(find('#test-awesome').checked);

  await click('#test-awesome');

  assert.ok(find('#test-awesome').checked);
  assert.notOk(find('#test-cool').checked);
});

test('it renders default selected option', function(assert) {
  this.set('isChecked', true);

  this.render(hbs`
    {{bulma-radio name="test" value="cool" id="test-cool" checked=isChecked}}

    {{bulma-radio name="test" value="awesome" id="test-awesome"}}
  `);

  assert.ok(find('#test-cool').checked);
});
