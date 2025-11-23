/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../docs/js/stories/**/*_stories.js"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../docs"],
};
export default config;
