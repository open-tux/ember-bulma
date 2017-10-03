import Ember from 'ember';
import layout from '../templates/components/bulma-tabs';
import { computed } from 'ember-decorators/object';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component,
  isEqual,
  set,
  get,
  getOwner,
  A: emberArray
} = Ember;

export default Component.extend({
  layout,
  classNames: 'tabs',
  classNameBindings: [
    'isRight:is-right',
    'isFullwidth:is-fullwidth',
    'isBoxed:is-boxed',
    'boxed:is-boxed',
    'centered:is-centered',
    'isCentered:is-centered',
    'isToggle:is-toggle',
    'toggle:is-toggle'
  ].concat(_helpers, _responsiveHelpers),

  /**
    If used inline, consumer will provide an array of tabs

    @property tabs
    @returns Array
    @public
  */
  tabs: emberArray([]),

  /**
    Convert POJA of tabs

    @method _processTabs
    @returns Array
    @private
  */
  @computed('tabs.[]', '_containerRouter.currentRouteName')
  _processedTabs(tabs, routeName) {
    // Compare the provided route to the current route
    if (tabs) {
      return tabs.map((tab) => {
        set(tab, 'isActive', isEqual(get(tab, 'route'), routeName));
        return tab;
      });
    } else {
      return [];
    }
  },

  /**
    Look up the router

    @property _containerRouter
    @returns Class
    @private
  */
  @computed()
  _containerRouter() {
    return getOwner(this).lookup('router:main');
  },
  actions: {
    /**
      Route tab to specified path and set as active, set toggle other active tabs

      @method route
      @public
    */
    routeTab(tab, tabs) {
      // De-activate all tabs
      emberArray(tabs).setEach('isActive', false);

      this.get('_containerRouter').transitionTo(get(tab, 'route')).then(() => {
        // Activate this tab using Ember.set (works with POJO or Ember Object)
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
