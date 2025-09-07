import '../src/styles.scss';
import type { Preview } from '@storybook/vue3-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    a11y: { element: '#storybook-root' },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F5F0' },
        { name: 'white', value: '#FFFFFF' }
      ]
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-theme'
    })
  ]
};

export default preview;
