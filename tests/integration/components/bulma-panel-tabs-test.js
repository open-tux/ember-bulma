import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma-panel-tabs', 'Integration | Component | bulma panel tabs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{bulma-panel-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma-panel-tabs}}
      template block text
    {{/bulma-panel-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
