import Ember from 'ember';
import computed,  { alias } from 'ember-computed-decorators';

export default Ember.Route.extend({
  @alias('model') demo,
  model() {
    return {
      demoTabs: [
        {
          name: 'Overview',
          route: 'overview',
          classNames: '',
          icon: ''
        },
        {
          name: 'Modifiers',
          route: 'uimodifiers',
          classNames: '',
          icon: '',
          subnav: [
            {
              name: 'Responsive Helpers',
              route: 'uimodifiers.response-helpers',
              classNames: ''
            }
          ]
        },
        {
          name: 'Grid',
          route: 'grid',
          classNames: '',
          icon: ''
        },
        {
          name: 'Elements',
          route: 'uielements.buttons',
          classNames: '',
          subnav: [
            {
              name: 'Buttons',
              route: 'uielements.buttons',
              classNames: ''
            },
            {
              name: 'Form Controls',
              route: 'uielements.form-controls',
              classNames: ''
            },
            {
              name: 'Messages',
              route: 'uielements.messages',
              classNames: ''
            },
            {
              name: 'Notifications',
              route: 'uielements.notifications',
              classNames: ''
            },
            {
              name: 'Progress',
              route: 'uielements.progress',
              classNames: ''
            },
            {
              name: 'Tags',
              route: 'uielements.tags',
              classNames: ''
            }
          ]
        },
        {
          name: 'Components',
          route: 'uicomponents.tabs.index',
          classNames: '',
          subnav: [
            {
              name: 'Tabs',
              route: 'uicomponents.tabs.index',
              classNames: ''
            },
            {
              name: 'Menu',
              route: 'uicomponents.menu',
              classNames: ''
            },
            {
              name: 'Nav',
              route: 'uicomponents.nav',
              classNames: ''
            },
            {
              name: 'Panel',
              route: 'uicomponents.panel',
              classNames: ''
            },
            {
              name: 'Table',
              route: 'uicomponents.table',
              classNames: ''
            }
          ]
        },
        {
          name: 'Layout',
          classNames: '',
          route: 'uilayout.container',
          subnav: [
            {
              name: 'Container',
              route: 'uilayout.container',
              classNames: ''
            },
            //TODO Depecrate this
            // {
            //   name: 'Header',
            //   route: 'uilayout.header',
            //   classNames: ''
            // },
            {
              name: 'Hero',
              route: 'uilayout.hero',
              classNames: ''
            },
            {
              name: 'Section',
              route: 'uilayout.section',
              classNames: ''
            },
            {
              name: 'Footer',
              route: 'uilayout.footer',
              classNames: ''
            }
          ]
        },
        {
          name: 'Themes',
          route: 'themes',
          classNames: ''
        }
      ]
    };
  }
});
