import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { fromPOJA } from './../../utils';

const { set } = Ember;

export default Ember.Controller.extend({
  /**
    Current menu filter

    @property filter
    @returns String
    @public
  */
  filter: ['all'],

  /**
    Simulate model

    @property demo
    @returns Object
    @public
  */
  @computed()
  demo() {
    return {
      menu: {
        tabs: Ember.A([
          {
            name: 'all',
            isActive: true
          },
          {
            name: 'public'
          },
          {
            name: 'private'
          },
          {
            name: 'sources'
          },
          {
            name: 'forks'
          }
        ]),
        blocks: [
          {
            name: 'ember-bulma',
            icon: 'fa fa-book',
            type: ['all', 'public', 'sources']
          },
          {
            name: 'bulma',
            icon: 'fa fa-code-fork',
            type: ['all', 'public', 'forks']
          },
          {
            name: 'ember',
            icon: 'fa fa-code-fork',
            type: ['all', 'public', 'forks']
          },
          {
            name: 'secret-sauce',
            icon: 'fa fa-lock',
            type: ['all', 'private', 'forks']
          }
        ]
      }
    };
  },

  /**
    Converted from POJA

    @property @demoBlocks
    @returns Array
    @public
  */
  @computed('demo.menu.blocks')
  demoBlocks(blocks) {
    return fromPOJA(blocks);
  },

  /**
    Converted from POJA

    @property @demoTabs
    @returns Array
    @public
  */
  @computed('demo.menu.tabs')
  demoTabs(tabs) {
    return fromPOJA(tabs);
  },
  actions: {
    /**
      Update current filter

      @method filterAction
      @public
    */
    filterAction(tab) {
      this.get('demoTabs').setEach('isActive', false);
      set(tab, 'isActive', true);
      this.set('filter', tab.get('name'));
    },

    /**
      Reset filter to default

      @method resetFilter
      @public
    */
    resetFilter() {
      this.get('demoTabs').setEach('isActive', false);
      this.set('filter', ['all']);
    },

    noAction() {
      //
    }

  }
});
