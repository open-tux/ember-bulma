import Ember from 'ember';
import { computed } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';

export default Ember.Controller.extend({
  /*
    Some mock models for demo purposed
  */
  @alias('demo.browsers') browsers: null,
  @alias('demo.media') media: null,
  @alias('demo.plain') plain: null,
  @alias('demo.tech') tech: null,
  @alias('demo.social') social: null,
  @alias('demo.git') git: null,
  @computed()
  demo() {
    return {
      git: [
        {
          name: 'Fork',
          route: 'uicomponents.tabs.pictures',
          icon: 'fa fa-code-fork'
        },
        {
          name: 'Star',
          route: 'uicomponents.tabs.music',
          icon: 'fa fa-star'
        },
        {
          name: 'Watch',
          route: 'uicomponents.tabs.videos',
          icon: 'fa fa-eye'
        },
        {
          name: 'Download',
          route: 'uicomponents.tabs.documents',
          icon: 'fa fa-github'
        }
      ],
      social: [
        {
          name: 'Facebook',
          route: 'uicomponents.tabs.pictures',
          icon: 'fa fa-facebook'
        },
        {
          name: 'Twitter',
          route: 'uicomponents.tabs.music',
          icon: 'fa fa-twitter'
        },
        {
          name: 'Vine',
          route: 'uicomponents.tabs.videos',
          icon: 'fa fa-vine'
        },
        {
          name: 'Instagram',
          route: 'uicomponents.tabs.documents',
          icon: 'fa fa-instagram'
        }
      ],
      plain: [
        {
          name: 'One',
          route: 'uicomponents.tabs.pictures'
        },
        {
          name: 'Two',
          route: 'uicomponents.tabs.music'
        },
        {
          name: 'Three',
          route: 'uicomponents.tabs.videos'
        }
      ],
      tech: [
        {
          name: 'HTML5',
          route: 'uicomponents.tabs.documents',
          icon: 'fa fa-html5'
        },
        {
          name: 'CSS3',
          route: 'uicomponents.tabs.pictures',
          icon: 'fa fa-css3'
        },
        {
          name: 'JSFiddle',
          route: 'uicomponents.tabs.videos',
          icon: 'fa fa-jsfiddle'
        },
        {
          name: 'Hacker News',
          route: 'uicomponents.tabs.music',
          icon: 'fa fa-hacker-news'
        }
      ],
      browsers: [
        {
          name: 'Chrome',
          route: 'uicomponents.tabs.pictures',
          icon: 'fa fa-chrome'
        },
        {
          name: 'Firefox',
          route: 'uicomponents.tabs.videos',
          icon: 'fa fa-firefox'
        },
        {
          name: 'Safari',
          route: 'uicomponents.tabs.music',
          icon: 'fa fa-safari'
        },
        {
          name: 'Edge',
          route: 'uicomponents.tabs.documents',
          icon: 'fa fa-edge'
        }
      ],
      media: [
        {
          name: 'Pictures',
          route: 'uicomponents.tabs.pictures',
          icon: 'fa fa-image'
        },
        {
          name: 'Music',
          route: 'uicomponents.tabs.music',
          icon: 'fa fa-music'
        },
        {
          name: 'Videos',
          route: 'uicomponents.tabs.videos',
          icon: 'fa fa-film'
        },
        {
          name: 'Documents',
          route: 'uicomponents.tabs.documents',
          icon: 'fa fa-file'
        }
      ]
    };
  }
});
