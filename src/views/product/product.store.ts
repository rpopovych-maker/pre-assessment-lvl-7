export const useProductStore = defineStore('productStore', () => {
  const loading = ref(false)
  const product = ref<IProduct>()
  const selectedProductVariant = ref<IProductVariant>()
  const selectedSizeRow = ref<ISizeRow | null>(null)
  const cart = ref<ICartItem[]>([])

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

  function addToCart () {
    const productId = product.value!.id
    const existing = cart.value.find(
      item => item.productId === productId &&
        item.variantId === selectedProductVariant.value!.id &&
        item.sizeRowId === selectedSizeRow.value!.id
    )

    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({
        productId,
        variantId: selectedProductVariant.value!.id,
        sizeRowId: selectedSizeRow.value!.id,
        quantity: 1
      })
    }

    return productService.addToCart(productId)
  }

  function selectVariant (index: number) {
    if (!product.value) return
    selectedProductVariant.value = product.value.variants[index]
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
    cart,
    fetchProduct,
    selectVariant,
    addToCart,
    toggleFavorite
  }
})
