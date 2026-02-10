<template>
  <label
    class="relative flex items-center justify-center rounded-lg border transition-colors p-2"
    :class="[
      disabled
        ? 'border-slate-200 text-slate-200 bg-neutral-100/50 cursor-not-allowed line-through'
        : checked
          ? 'border-secondary bg-neutral-100 text-slate-900'
          : `border-slate-900 bg-white text-slate-900
            hover:bg-neutral-100 active:border-primary cursor-pointer`
    ]"
  >
    <input
      type="radio"
      class="absolute inset-0 opacity-0 cursor-[inherit]"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change', value)"
    >
    <slot />
  </label>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  name: string
  value: T
  checked: boolean
  disabled?: boolean
}>()

defineEmits<{ change: [value: T] }>()
</script>
