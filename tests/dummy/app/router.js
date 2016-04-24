import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('overview', { path: '/' });
  this.route('grid');
  this.route('navbar');
  this.route('layout', function() {
    this.route('container', { path: '/' });
    this.route('header');
    this.route('hero');
    this.route('section');
    this.route('footer');
  });

  this.route('themes');

  this.route('uielements', function() {
    this.route('buttons', { path: '/' });
    this.route('form-controls');
    this.route('messages');
    this.route('notifications');
    this.route('tags');
  });

  this.route('uicomponents', function() {
    this.route('tabs', { path: '/' }, function() {
      this.route('pictures');
      this.route('music');
      this.route('videos');
      this.route('documents');
    });

    this.route('menu');
    this.route('table');
  });
});

export default Router;
