/* jshint node: true */
'use strict';

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

    var target = (parentAddon || app);
    var options = target.options.emberCliFontAwesome || {};

    if (!('includeFontAwesomeAssets' in options)) {
      options.includeFontAwesomeAssets = true;
    }

    if (options.includeFontAwesomeAssets) {
      if (!options.useScss) {
        target.import(target.bowerDirectory + "/font-awesome/css/font-awesome.css");
      }

      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
      target.import(target.bowerDirectory + "/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });
    }

    //Include Bulma
    if (!('includeBulmaAssets' in options)) {
      options.includeBulmaAssets = true;
    }

    if (options.includeBulmaAssets) {
      target.import(target.bowerDirectory + "/bulma/css/bulma.min.css");
    }

  },
};
