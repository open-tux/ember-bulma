/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const intersection = require('./lib/intersection');
const difference = require('./lib/difference');

module.exports = {
  name: 'ember-bulma',

  init() {
    this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.plugins = this.options.babel.plugins || [];

    if (this.options.babel.plugins.indexOf('transform-decorators-legacy') === -1) {
      this.options.babel.plugins.push('transform-decorators-legacy');
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    let app;

    // Climb up the hierarchy of addons up to the host
    // If the addon has the `_findHost()` method (in ember-cli >= 2.7.0) then use it
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, use the copied `_findHost()` implementation
      // https://github.com/ember-cli/ember-cli/blob/v2.15.1/lib/models/addon.js#L614-L625
      let current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    this.app = app;

    // see: http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    app.options = app.options || {};

    // Build path to Bulma's sass paths
    let bulmaPath = path.dirname(require.resolve('bulma'));

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

    // Import sass dependencies
    app.options.sassOptions.includePaths.push(bulmaPath);

    let config = app.project.config(app.env) || {};
    let addonConfig = config[this.name] || {};

    this.whitelist = this.generateWhitelist(addonConfig);
    this.blacklist = this.generateBlacklist(addonConfig);
  },

  /*
    Tree Shaking borrowed from DockYard
    https://github.com/DockYard/ember-composable-components/
    https://github.com/DockYard/ember-composable-components#configuration
  */
  treeForAddon() {
    // see: https://github.com/ember-cli/ember-cli/issues/4463
    var tree = this._super.treeForAddon.apply(this, arguments);

    return this.filterComponents(tree, new RegExp('^modules\/' + this.name + '\/components\/', 'i'));
  },

  filterComponents(tree, regex) {
    var whitelist = this.whitelist;
    var blacklist = this.blacklist;
    var _this = this;

    // exit early if no opts defined
    if (whitelist.length === 0 && blacklist.length === 0) {
      return new Funnel(tree);
    }

    var funnelTree = new Funnel(tree, {
      exclude: [function(name) {
        return _this.exclusionFilter(name, regex, {
          whitelist: whitelist,
          blacklist: blacklist
        });
      }]
    });

    return funnelTree;
  },

  exclusionFilter(name, regex, lists) {
    var whitelist = lists.whitelist || [];
    var blacklist = lists.blacklist || [];
    var isAddonComponent = regex.test(name);
    var componentName = path.basename(name, '.js');
    var isWhitelisted = whitelist.indexOf(componentName) !== -1;
    var isBlacklisted = blacklist.indexOf(componentName) !== -1;

    // non-component, don't exclude
    if (!isAddonComponent) {
      return false;
    }

    // don't exclude if both lists are empty
    if (whitelist.length === 0 && blacklist.length === 0) {
      return false;
    }

    // don't exclude if both whitelisted and blacklisted
    if (isWhitelisted && isBlacklisted) {
      return false;
    }

    // only whitelist defined
    if (whitelist.length && blacklist.length === 0) {
      return !isWhitelisted;
    }

    // only blacklist defined
    if (blacklist.length && whitelist.length === 0) {
      return isBlacklisted;
    }

    return !isWhitelisted || isBlacklisted;
  },

  generateWhitelist(addonConfig) {
    var only = addonConfig.only || [];
    var except = addonConfig.except || [];

    if (except && except.length) {
      return difference(only, except);
    }

    return only;
  },

  generateBlacklist(addonConfig) {
    var only = addonConfig.only || [];
    var except = addonConfig.except || [];

    if (only && only.length) {
      return intersection(except, only);
    }

    return except;
  }
};
