import { render, fireEvent, cleanup } from '@testing-library/vue';
import { describe, it, expect, afterEach } from 'vitest';
import TmButton from './TmButton.vue';

afterEach(cleanup);

describe('TmButton', () => {
  it('renders with accessible name', () => {
    const { getByRole } = render(TmButton, { props: { label: 'Jetzt anmelden' } });
    getByRole('button', { name: 'Jetzt anmelden' });
  });

  it('emits click events', async () => {
    const { getByRole, emitted } = render(TmButton, { props: { label: 'Jetzt anmelden' } });
    const btn = getByRole('button');
    await fireEvent.click(btn);
    expect(emitted().click).toBeTruthy();
  });

  it('handles disabled state', async () => {
    const { getByRole, emitted } = render(TmButton, { props: { label: 'Jetzt anmelden', disabled: true } });
    const btn = getByRole('button');
    await fireEvent.click(btn);
    expect(btn).toBeDisabled();
    expect(emitted().click).toBeUndefined();
  });
});
