/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
// "plugin:vue/vue3-essential",
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "vue/require-default-prop": "off",
    "vue/comment-directive": ["error", {
      "reportUnusedDisableDirectives": true,
    }]
  },
  
};
