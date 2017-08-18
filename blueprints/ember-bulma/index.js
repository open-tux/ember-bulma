/* eslint-env node */
module.exports = {
  description: 'Installs NPM dependencies',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall() {
    return this.addPackagesToProject(
      [
        { name: 'bulma', target: '^0.5.0' },
        { name: 'ember-cli-sass', target: '^6.1.3' }
      ]
    );
  }
};
