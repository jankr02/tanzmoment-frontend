<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: 'Jetzt anmelden' },
  variant: { type: String as () => 'primary' | 'secondary' | 'ghost', default: 'primary' },
  disabled: { type: Boolean, default: false },
  block: { type: Boolean, default: false }
});
const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>();
const onClick = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click', e);
};
</script>

<template>
  <button
    class="tm-btn"
    :class="[`tm-btn--${props.variant}`, { 'tm-btn--block': props.block }]"
    :disabled="props.disabled"
    @click="onClick"
  >
    {{ props.label }}
  </button>
</template>

<style scoped lang="scss">
.tm-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-cta, 'Rubik', sans-serif);
  box-shadow: var(--shadow-1);
  &--primary {
    background: var(--color-primary-dark);
    color: var(--color-primary-light);
  }
  &--secondary {
    background: var(--color-secondary);
    color: var(--color-primary-dark);
  }
  &--ghost {
    background: transparent;
    color: var(--color-primary-dark);
    box-shadow: none;
  }
  &--block {
    display: block;
    width: 100%;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline:2px solid var(--color-soft-accent);
    outline-offset:2px;
  }
}
</style>
