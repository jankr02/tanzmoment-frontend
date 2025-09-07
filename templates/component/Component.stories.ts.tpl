import type { Meta, StoryObj } from '@storybook/vue3';
import __Name__ from './__Name__.vue';

const meta: Meta<typeof __Name__> = {
  title: '__Title__',
  component: __Name__,
  argTypes: {
    onClick: { action: 'click' }
  }
};

export default meta;
type Story = StoryObj<typeof __Name__>;

export const Default: Story = {
  args: {}
};

export const Variant: Story = {
  args: {}
};

export const Disabled: Story = {
  args: { disabled: true }
};
