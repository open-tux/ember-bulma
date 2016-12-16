import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma-modal-close', 'Integration | Component | bulma modal close', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{bulma-modal-close}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma-modal-close}}
      template block text
    {{/bulma-modal-close}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
