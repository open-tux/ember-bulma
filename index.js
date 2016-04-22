/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-bulma',

  init: function(app) {
    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  },

  included: function(app, parentAddon) {
     // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included(app);

    // see: http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    var target = (parentAddon || app);
    target.options = target.options || {};


    // Build all paths
    var bulmaPath = path.join(app.bowerDirectory, 'bulma');

    target.options.sassOptions = target.options.sassOptions || {};
    target.options.sassOptions.includePaths = target.options.sassOptions.includePaths || [];

    // Import sass dependencies
    target.options.sassOptions.includePaths.push(bulmaPath);
    // target.options.sassOptions.extension = 'sass';

    /** Font Awesome **/
    if (!('includeFontAwesomeAssets' in target.options)) {
      target.options.includeFontAwesomeAssets = true;
    }

    if (target.options.includeFontAwesomeAssets) {
      if (!target.options.useScss) {
        target.import(target.bowerDirectory + "/font-awesome/css/font-awesome.css");
      }

      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });
    }

  }
};
