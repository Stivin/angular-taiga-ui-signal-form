import type { Config } from 'prettier';

const config: Config = {
  plugins: ['prettier-plugin-organize-attributes'],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  attributeGroups: [
    '$ANGULAR_ELEMENT_REF',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ID',
    '$DEFAULT',
    '$CLASS',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
  ],
  overrides: [
    {
      files: ['*js'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts'],
      options: { parser: 'typescript' },
    },
    {
      files: ['*.html'],
      options: { parser: 'angular' },
    },
    {
      files: ['*.scss'],
      options: { parser: 'scss' },
    },
    {
      files: ['*.json'],
      options: { parser: 'json' },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: { parser: 'yaml' },
    },
    {
      files: ['*.md'],
      options: { parser: 'markdown' },
    },
  ],
};

export default config;
