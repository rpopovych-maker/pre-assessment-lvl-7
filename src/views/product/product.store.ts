export const useProductStore = defineStore('productStore', () => {
  const loading = ref(false)
  const product = ref<IProduct>()
  const selectedProductVariant = ref<IProductVariant>()
  const selectedSizeRow = ref<ISizeRow | null>(null)
  const variants = computed(() => product.value?.variants || [])

  const cartItemPayload = computed<ICartItemPayload | null>(() => {
    if (!product.value || !selectedProductVariant.value || !selectedSizeRow.value) return null

    return {
      productId: product.value.id,
      variantId: selectedProductVariant.value.id,
      sizeRowId: selectedSizeRow.value.id
    }
  })

  function fetchProduct () {
    loading.value = true
    productService.fetchProduct()
      .then(res => {
        product.value = res
        selectedProductVariant.value = product.value.variants[0]
        selectedSizeRow.value = selectedProductVariant.value?.sizeChart.rows.find(row => !row.outOfStock) ?? null
      })
      .finally(() => { loading.value = false })
  }

  function selectVariant (id: string) {
    selectedProductVariant.value = product.value?.variants.find(variant => variant.id === id)
    selectedSizeRow.value = selectedProductVariant.value?.sizeChart.rows.find(row => !row.outOfStock) ?? null
  }

  function toggleFavorite (id: string) {
    product.value!.isFavourite = !product.value!.isFavourite
    return productService.toggleFavorite(id, product.value!.isFavourite)
  }

  return {
    loading,
    product,
    selectedProductVariant,
    selectedSizeRow,

    variants,
    cartItemPayload,

    fetchProduct,
    selectVariant,
    toggleFavorite
  }
})
