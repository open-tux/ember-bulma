const { types, scopes } = require('./commitizen.config');

const validTypes = types.map((type) => type.value);
const validScopes = scopes.map((scope) => scope.name);

module.exports = {
  extends: ['@commitlint/config-angular'],

  rules: {
    'body-leading-blank': [2, 'always'],
    'body-tense': [0, 'always', ['present-imperative']],
    'scope-enum': [1, 'always', validScopes],
    'type-enum': [2, 'always', validTypes]
  }
};
