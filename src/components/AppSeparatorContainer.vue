<template>
  <div
    class="flex separator-container text-"
    :style="{ '--separator': `'${separator}'` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: number
  separator?: string
}>(), {
  gap: 6,
  separator: '•'
})

const getGap = computed(() => `${props.gap}px`)
</script>

<style lang="scss">
.separator-container {
  & > *:not(:empty, :first-child) {
    &::before {
      content: var(--separator);
      margin: 0 v-bind(getGap);
    }
  }

  & > *:empty + * {
    &::before {
      content: "";
      margin: 0;
    }
  }
}
</style>
