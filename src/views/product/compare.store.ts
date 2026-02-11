export const useCompareStore = defineStore('compare', () => {
  const compareList = ref<Set<string>>(new Set())

  function add (productId: string) {
    compareList.value.add(productId)
  }

  function remove (productId: string) {
    compareList.value.delete(productId)
  }

  function toggle (productId: string) {
    if (compareList.value.has(productId)) {
      remove(productId)
    } else {
      add(productId)
    }
  }

  function isInCompareList (productId: string) {
    return compareList.value.has(productId)
  }

  return { compareList, add, remove, isInCompareList, toggle }
})
