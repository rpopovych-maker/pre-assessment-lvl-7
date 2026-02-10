<template>
  <div class="relative min-w-0" :class="$attrs.class">
    <Transition name="fade">
      <ScrollArrowButton
        v-show="canScrollLeft"
        direction="left"
        @click="scroll(-1)"
      />
    </Transition>

    <div
      ref="scrollContainerRef"
      class="flex overflow-x-auto"
      :class="contentClass"
    >
      <slot />
    </div>

    <Transition name="fade">
      <ScrollArrowButton
        v-show="canScrollRight"
        direction="right"
        @click="scroll(1)"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  contentClass?: string
}>()

const scrollContainerRef = useTemplateRef<HTMLElement>('scrollContainerRef')

const { arrivedState } = useScroll(scrollContainerRef)

const canScrollLeft = computed(() => !arrivedState.left)
const canScrollRight = computed(() => !arrivedState.right)

function scroll (direction: -1 | 1) {
  const container = scrollContainerRef.value
  if (!container) return

  const scrollAmount = container.clientWidth * 0.6
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
}
</script>
