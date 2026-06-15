/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,ts}': ['prettier --write'],
  '*.html': ['prettier --write --parser angular'],
  '*.less': ['prettier --write'],
  '*{json,yml,yaml,md}': ['prettier --write'],
};
