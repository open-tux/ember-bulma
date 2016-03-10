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
          name: 'Grid',
          route: 'grid',
          classNames: '',
          icon: ''
        },
        // TODO
        // {
        //   name: 'Navbar',
        //   route: 'navbar',
        //   classNames: ''
        // },
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
              name: 'Table',
              route: 'uicomponents.table',
              classNames: ''
            }
          ]
        },
        {
          name: 'Layout',
          classNames: '',
          route: 'layout.container',
          subnav: [
            {
              name: 'Container',
              route: 'layout.container',
              classNames: ''
            },
            {
              name: 'Header',
              route: 'layout.header',
              classNames: ''
            },
            {
              name: 'Hero',
              route: 'layout.hero',
              classNames: ''
            },
            {
              name: 'Section',
              route: 'layout.section',
              classNames: ''
            },
            {
              name: 'Footer',
              route: 'layout.footer',
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
