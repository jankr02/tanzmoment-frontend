import { render, fireEvent, cleanup } from '@testing-library/vue'
import { describe, it, expect, afterEach } from 'vitest'
import CtaButton from '@/components/CtaButton.vue'

afterEach(() => cleanup())

describe('CtaButton', () => {
  it('renders label', () => {
    const { getByRole } = render(CtaButton, { props: { label: 'Click me' } })
    expect(getByRole('button', { name: 'Click me' })).toBeTruthy()
  })

  it('emits click when enabled', async () => {
    const { getByRole, emitted } = render(CtaButton, {
      props: { label: 'Click me' }
    })
    await fireEvent.click(getByRole('button'))
    expect(emitted().click).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const { getByRole, emitted } = render(CtaButton, {
      props: { label: 'Click me', disabled: true }
    })
    await fireEvent.click(getByRole('button'))
    expect(emitted().click).toBeUndefined()
  })

  it('prevents navigation when anchor is disabled', () => {
    const { getByRole } = render(CtaButton, {
      props: { label: 'Link', as: 'a', href: '#', disabled: true }
    })
    const link = getByRole('button')
    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    link.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
  })
})
