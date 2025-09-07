import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within } from '@storybook/test';
import TmButton from './TmButton.vue';

const meta: Meta<typeof TmButton> = {
  title: 'Components/TmButton',
  component: TmButton,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    onClick: { action: 'click' }
  }
};

export default meta;
type Story = StoryObj<typeof TmButton>;

export const Default: Story = {
  args: { label: 'Jetzt anmelden', variant: 'primary' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  }
};

export const Secondary: Story = {
  args: { label: 'Jetzt anmelden', variant: 'secondary' }
};

export const Ghost: Story = {
  args: { label: 'Jetzt anmelden', variant: 'ghost' }
};

export const Disabled: Story = {
  args: { label: 'Jetzt anmelden', disabled: true }
};
