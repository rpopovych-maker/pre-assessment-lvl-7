<template>
  <div class="bg-violet-950 rounded  py-2 px-4">
    <ul class="flex items-center gap-4">
      <li
        v-for="detail in details"
        :key="detail.label"
        class="flex flex-col w-16 text-right"
      >
        <span class="text-xs uppercase">{{ detail.label }}</span>
        <span class="font-bold tabular-nums">{{ detail.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface IDetail {
  label: string
  value: string | number
}

const props = defineProps<{
  moves: number
  elapsedTime: number
}>()

const details = computed<IDetail[]>(() => [
  { label: 'Time', value: `${props.elapsedTime}s` },
  { label: 'Moves', value: props.moves }
])
</script>
