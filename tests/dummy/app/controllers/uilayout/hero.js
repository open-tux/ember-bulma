import Ember from 'ember';

export default Ember.Controller.extend({
  demoLinks: Ember.A([
    {
      name: 'One',
      route: 'uilayout.hero'
    },
    {
      name: 'Two',
      route: 'uilayout.hero?fake'
    },
    {
      name: 'Three',
      route: 'uilayout.hero?fake'
    }
  ])
});
