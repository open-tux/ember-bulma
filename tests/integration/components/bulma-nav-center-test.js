import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulma-nav-center', 'Integration | Component | bulma nav center', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulma-nav-center}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulma-nav-center}}
      template block text
    {{/bulma-nav-center}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
