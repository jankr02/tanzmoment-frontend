<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    block?: boolean
    as?: 'button' | 'a'
    href?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    block: false,
    as: 'button'
  }
)

const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>()

const attrs = useAttrs()

const classes = computed(() => [
  'cta-button',
  `cta-button--${props.variant}`,
  `cta-button--${props.size}`,
  {
    'is-disabled': props.disabled,
    'is-block': props.block
  }
])

function onClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  if (props.as === 'button') {
    emit('click', event)
  }
}
</script>

<template>
  <component
    :is="props.as"
    v-bind="attrs"
    :class="classes"
    :href="props.as === 'a' ? props.href : undefined"
    :role="props.as === 'a' ? 'button' : undefined"
    :tabindex="props.as === 'a' ? (props.disabled ? -1 : 0) : undefined"
    :aria-disabled="props.disabled ? 'true' : undefined"
    :aria-label="(attrs['aria-label'] as string) ?? props.label"
    :type="props.as === 'button' ? 'button' : undefined"
    :disabled="props.as === 'button' ? props.disabled : undefined"
    @click="onClick"
  >
    <slot />
    <span class="cta-button__label">{{ props.label }}</span>
    <slot name="suffix" />
  </component>
</template>

<style scoped>
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 17px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.1s,
    transform 0.1s;
}

.cta-button.is-block {
  display: flex;
  width: 100%;
}

.cta-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.cta-button--sm {
  padding: 6px 12px;
  font-size: 0.875rem;
}

.cta-button--md {
  padding: 8px 16px;
  font-size: 1rem;
}

.cta-button--lg {
  padding: 12px 20px;
  font-size: 1.125rem;
}

.cta-button--primary {
  background-color: #c08969;
  color: #f2ece3;
}

.cta-button--primary:focus-visible {
  outline: 2px solid rgba(192, 137, 105, 0.6);
  outline-offset: 2px;
}

.cta-button--primary:hover:not(.is-disabled) {
  background-color: #b07e60;
}

.cta-button--secondary {
  background-color: #f2ece3;
  color: #c08969;
  border-color: #c08969;
}

.cta-button--secondary:focus-visible {
  outline: 2px solid rgba(192, 137, 105, 0.9);
  outline-offset: 2px;
}

.cta-button--secondary:hover:not(.is-disabled) {
  color: #b07e60;
  border-color: #b07e60;
}

.cta-button--primary:active:not(.is-disabled),
.cta-button--secondary:active:not(.is-disabled) {
  transform: translateY(1px);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
