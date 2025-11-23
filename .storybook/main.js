module.exports = {
  stories: ['../docs/js/stories/**/*.js'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: ['../docs'],
};
