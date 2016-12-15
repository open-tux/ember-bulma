import Ember from 'ember';

const {
  Controller,
  A: emberArray
} = Ember;

export default Controller.extend({
  demoLinks: emberArray([
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
    },
    {
      name: 'Four',
      route: 'uilayout.hero?fake'
    },
    {
      name: 'Five',
      route: 'uilayout.hero?fake'
    }
  ])
});
