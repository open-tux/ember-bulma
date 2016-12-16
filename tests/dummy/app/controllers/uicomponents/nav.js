import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  tabs: [
    {
      name: 'Pictures',
      route: 'media.pictures',
      icon: 'fa fa-image'
    },
    {
      name: 'Music',
      route: 'media.music',
      icon: 'fa fa-music'
    }
  ]
});
