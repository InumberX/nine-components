const { resolve } = require('path')

module.exports = {
 stories: [
  '../stories/**/*.stories.mdx',
  '../stories/**/*.stories.@(js|jsx|ts|tsx)',
 ],
 addons: [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-knobs/register',
  '@storybook/addon-a11y/register',
  '@storybook/addon-storysource',
  '@storybook/addon-notes/register',
  '@storybook/addon-viewport/register',
  '@storybook/addon-docs',
  '@storybook/addon-backgrounds/register',
  'storybook-dark-mode/register',
 ],
 webpackFinal: async (config, { configType }) => {
  config.module.rules.push({
   test: /\.scss$/,
   use: ['style-loader', 'css-loader', 'sass-loader'],
   include: resolve(__dirname, '../_styles'),
  })

  config.module.rules.push({
   test: /\.ejs$/,
   use: [
    {
     loader: 'ejs-compiled-loader',
     options: {
      htmlmin: false,
      htmlminOptions: {
       removeComments: false,
      },
     },
    },
   ],
   include: resolve(__dirname, '../_components'),
  })

  return config
 },
}
