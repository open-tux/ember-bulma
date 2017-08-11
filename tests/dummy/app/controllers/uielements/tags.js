import Ember from 'ember';
import { computed } from 'ember-decorators/object';

export default Ember.Controller.extend({
  @computed()
  demo() {
    return {
      tagsSubset: Ember.A([
        {
          name: 'Foo',
          success: true
        },
        {
          name: 'Bar',
          warning: true,
          medium: true
        },
        {
          name: 'Foo Bar',
          danger: true,
          large: true
        }
      ]),
      tags: Ember.A([
        {
          name: 'Dark',
          dark: true
        },
        {
          name: 'Primary',
          primary: true
        },
        {
          name: 'Info',
          info: true
        },
        {
          name: 'Success',
          success: true
        },
        {
          name: 'Warning',
          warning: true
        },
        {
          name: 'Danger',
          danger: true
        }
      ])
    };
  },
  actions: {
    removeAction(tagName) {
      let tags = this.get('demo.tagsSubset');
      let tag  = tags.findBy('name', tagName);
      this.set('demo.tagsSubset', tags.without(tag));
    }
  }
});
