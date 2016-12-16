import Ember from 'ember';

const {
  Controller,
  A: emberArray
} = Ember;

export default Controller.extend({
  elements: emberArray([
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
