module.exports = {
  plugins: ['ember-template-lint-plugin-prettier'],

  extends: ['octane', 'ember-template-lint-plugin-prettier:recommended'],

  rules: {
    'no-bare-strings': false,
    prettier: true,
    // ember-template-lint stylistic rules
    'block-indentation': false,
    'linebreak-style': false,
    quotes: false,
    'self-closing-void-elements': false
  }
};
