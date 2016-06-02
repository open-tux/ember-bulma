import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma-modal-background', 'Integration | Component | bulma modal background', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulma-modal-background}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma-modal-background}}
      template block text
    {{/bulma-modal-background}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
