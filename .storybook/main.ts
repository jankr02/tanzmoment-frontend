import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/vue3-vite', options: {} },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-themes',
    '@storybook/addon-styling'
  ],
  docs: { autodocs: true },
  staticDirs: ['../public']
};

export default config;
