<template>
  <button
    class="size-full text-xl rounded flex items-center justify-center
     font-bold select-none not-empty:cursor-pointer not-empty:relative not-empty:z-10"
    :class="[bgColor, { 'shake': blocked && tile !== null }]"
    :disabled
  >
    {{ tile }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tile: TTile
  index: number
  disabled: boolean
  blocked: boolean
}>()

const bgColor = computed(() => {
  if (props.tile === null) return 'bg-violet-950'
  return props.tile === props.index + 1 ? 'bg-orange-500' : 'bg-teal-500'
})
</script>

<style scoped>
@keyframes shake {
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-3px); }
  50%  { transform: translateX(3px); }
  75%  { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 250ms ease-in-out;
}
</style>
