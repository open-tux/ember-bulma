import Ember from 'ember';
import layout from '../templates/components/bulma-tabs';
import computed, { readOnly, alias } from 'ember-computed-decorators';
import { makeString } from '../utils';

const {
  isEqual,
  set,
  get
  /* Object: { create: _create } */
} = Ember;

export default Ember.Component.extend({
  layout,
  classNames: 'tabs',
  classNameBindings: ['isFullwidth:is-fullwidth', 'isBoxed:is-boxed', 'boxed:is-boxed', 'centered:is-centered', 'isCentered:is-centered', 'isToggle:is-toggle', 'toggle:is-toggle'],

  /**
    Signal if to be used as site navigation (top level routes)
    // TODO: always highlight top level active item when isSiteNav is true

    @property isSiteNav
    @returns Boolean
    @public
  */
  isSiteNav: false,

  /**
    If used inline, consumer will provide an array of tabs

    @property tabs
    @returns Array
    @public
  */
  tabs: Ember.A([]),

  /**
    Convert POJA of tabs

    @method _processTabs
    @returns Array
    @private
  */
  @computed('tabs')
  _processedTabs(tabs) {
    //Expose the current route name
    let containerRouteName = this.get('_containerRouter.currentRouteName');

    //Compare the provided route to the current route
    if (tabs) {
      return tabs.map((tab) => {
        if (!tab.hasOwnProperty('isActive')) {
          set(tab, 'isActive', isEqual(get(tab, 'route'), containerRouteName));
        }
        return tab;
      });
    } else {
      return [];
    }
  },


  /**
    Look up the router
    // TODO: Ember 2.2+ - http://emberjs.com/blog/2016/01/15/ember-2-3-released.html - Ember.getOwner(container)

    @property _containerRouter
    @returns Class
    @private
  */
  @computed('container')
  _containerRouter(container) {
    return container.lookup('router:main');
  },
  actions: {
    /**
      Route tab to specified path and set as active, set toggle other active tabs

      @method route
      @public
    */
    routeTab(tab, tabs) {
      //De-activate all tabs
      Ember.A(tabs).setEach('isActive', false);

      this.get('_containerRouter').transitionTo(get(tab, 'route')).then(() => {
        //Activate this tab using Ember.set (works with POJO or Ember Object)
        set(tab, 'isActive', true);
      });
    },

    /**
      Transition to new route and add is-active

      @method handleRouting
      @public
    */
    _handleRouting(tab) {
      this.send('routeTab', tab, this.get('_processedTabs'));
    }
  }
});
