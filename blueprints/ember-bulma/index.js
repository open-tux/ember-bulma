/* eslint-env node */
module.exports = {
  description: 'Installs Bower and NPM dependencies',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall() {
    // NOTE: Currently adding `eslint-plugin-ember-suave` to the consuming app/addon to bypass the following error. This shouldn't be a necessary step:
    // Error: Failed to load plugin ember-suave: Cannot find module 'eslint-plugin-ember-suave'
    return this.addPackagesToProject(
      [
        { name: 'bulma', target: '^0.5.1' },
        { name: 'ember-cli-sass', target: '~6.1.2' },
        { name: 'eslint-plugin-ember-suave', target: '~1.0.0' }
      ]
    );
  }
};
