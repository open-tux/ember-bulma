import Ember from 'ember';

export default Ember.Controller.extend({
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
