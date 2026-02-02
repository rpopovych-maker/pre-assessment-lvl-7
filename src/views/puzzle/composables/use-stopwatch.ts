import { ref, onUnmounted } from 'vue'

export function useStopwatch () {
  const elapsed = ref(0)
  const isActive = ref(false)
  let intervalId: ReturnType<typeof setInterval> | null = null

  const runInterval = () => {
    intervalId = setInterval(() => {
      elapsed.value++
    }, 1000)
  }

  const start = () => {
    reset()
    isActive.value = true
    runInterval()
  }

  const pause = () => {
    if (!isActive.value) return
    isActive.value = false
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  const resume = () => {
    if (isActive.value) return
    isActive.value = true
    runInterval()
  }

  const reset = () => {
    pause()
    elapsed.value = 0
  }

  onUnmounted(() => pause())

  return { elapsed, isActive, start, pause, resume, reset }
}
