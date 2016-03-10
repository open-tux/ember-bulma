import Ember from 'ember';

export default Ember.Controller.extend({
  elements: Ember.A([
    {
      label: 'Primary',
      primary: true
    },
    {
      label: 'Info',
      info: true
    },
    {
      label: 'Success',
      success: true
    },
    {
      label: 'Warning',
      warning: true
    },
    {
      label: 'Danger',
      danger: true
    }
  ])
});
