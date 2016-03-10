import Ember from 'ember';

export default Ember.Controller.extend({
  demoLinks: Ember.A([
    {
      name: 'One',
      route: 'layout.hero'
    },
    {
      name: 'Two',
      route: 'layout.hero?fake'
    },
    {
      name: 'Three',
      route: 'layout.hero?fake'
    }
  ])
});
