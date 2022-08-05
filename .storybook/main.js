module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["../preset.js", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.devtool = process.env.NODE_ENV === "development" ? 'source-map' : false
    return config;
  },
  managerWebpack: async (config, options) => {
    config.devtool = process.env.NODE_ENV === "development" ? 'source-map' : false
    return config;
  }
};
