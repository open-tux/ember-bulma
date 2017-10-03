import Ember from 'ember';
import { alias } from 'ember-decorators/object/computed';

const {
  Route
} = Ember;

export default Route.extend({
  @alias('model') demo: null,
  model() {
    return {
      demoTabs: [{
          name: 'Overview',
          route: 'overview',
          icon: ''
        },
        {
          name: 'Modifiers',
          route: 'uimodifiers',
          icon: '',
          subnav: [{
            name: 'Helpers',
            route: 'uimodifiers.helpers'
          }, {
            name: 'Responsive Helpers',
            route: 'uimodifiers.responsive-helpers'
          }]
        },
        {
          name: 'Grid',
          route: 'grid',
          icon: ''
        },
        {
          name: 'Elements',
          route: 'uielements.buttons',
          subnav: [{
              name: 'Buttons',
              route: 'uielements.buttons'
            },
            {
              name: 'Form Controls',
              route: 'uielements.form-controls'
            },
            {
              name: 'Messages',
              route: 'uielements.messages'
            },
            {
              name: 'Notifications',
              route: 'uielements.notifications'
            },
            {
              name: 'Progress',
              route: 'uielements.progress'
            },
            {
              name: 'Tags',
              route: 'uielements.tags'
            }
          ]
        },
        {
          name: 'Components',
          route: 'uicomponents.tabs.index',
          subnav: [{
              name: 'Modal',
              route: 'uicomponents.modal'
            },
            {
              name: 'Tabs',
              route: 'uicomponents.tabs.index'
            },
            {
              name: 'Menu',
              route: 'uicomponents.menu'
            },
            {
              name: 'Nav',
              route: 'uicomponents.nav'
            },
            {
              name: 'Panel',
              route: 'uicomponents.panel'
            },
            {
              name: 'Table',
              route: 'uicomponents.table'
            }
          ]
        },
        {
          name: 'Layout',
          route: 'uilayout.container',
          subnav: [{
              name: 'Container',
              route: 'uilayout.container'
            },
            {
              name: 'Hero',
              route: 'uilayout.hero'
            },
            {
              name: 'Section',
              route: 'uilayout.section'
            },
            {
              name: 'Footer',
              route: 'uilayout.footer'
            }
            // TODO: Add Header
            // {
            //   name: 'Header',
            //   route: 'uilayout.header'
            // }
          ]
        },
        {
          name: 'Themes',
          route: 'themes'
        }
      ]
    };
  }
});
