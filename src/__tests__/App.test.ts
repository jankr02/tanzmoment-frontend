import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'

describe('App', () => {
  it('renders without crashing', () => {
    render(App)
    expect(true).toBe(true)
  })
})
