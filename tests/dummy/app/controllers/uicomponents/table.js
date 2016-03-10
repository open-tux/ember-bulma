import Ember from 'ember';
import computed, { alias } from 'ember-computed-decorators';

import hbs from 'htmlbars-inline-precompile';


export default Ember.Controller.extend({

  plain: {
    rows: [
      {
        'One': 'Three',
        'Two': 'Four'
      },
      {
        'One': 'Five',
        'Two': 'Six'
      }
    ],
  },
  table: {
    rows: [
      {
        '' : '<i class="fa fa-android"></i>',
        'Open source projects' : 'Android',
        'Year Started': '2003',
        'Links': '<a href="#"><i class="fa fa-github"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-globe"></i></a>',
        '_tags': 'google'
      },
      {
        '' : '<i class="fa fa-firefox"></i>',
        'Open source projects' : 'Firefox',
        'Year Started': '2003',
        'Links': '<a href="#"><i class="fa fa-github"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-globe"></i></a>',
        '_tags': 'mozilla'
      },
      {
        '' : '<i class="fa fa-linux"></i>',
        'Open source projects' : 'Linux',
        'Year Started': '2003',
        'Links': '<a href="#"><i class="fa fa-github"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-globe"></i></a>',
        '_tags': 'unix'
      },
      {
        '' : '<i class="fa fa-wordpress"></i>',
        'Open source projects' : 'Wordpress',
        'Year Started': '2003',
        'Links': '<a href="#"><i class="fa fa-github"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-globe"></i></a>',
        '_tags': 'wysiwyg'
      }
    ]
  }
});
