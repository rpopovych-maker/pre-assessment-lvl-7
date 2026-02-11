export const useCartStore = defineStore('cart', () => {
  const cart = ref<Map<string, ICartItem>>(new Map())

  function generateKey (item: ICartItemPayload) {
    return `${item.productId}-${item.variantId}-${item.sizeRowId}`
  }

  function isInCart (item: ICartItemPayload) {
    return cart.value.has(generateKey(item))
  }

  function getQuantity (item: ICartItemPayload) {
    return cart.value.get(generateKey(item))?.quantity ?? 0
  }

  function add (item: ICartItemPayload) {
    const key = generateKey(item)
    const existing = cart.value.get(key)

    if (existing) {
      existing.quantity++
    } else {
      cart.value.set(key, { ...item, quantity: 1 })
    }

    return cartService.addToCart(item)
  }

  return { cart, isInCart, getQuantity, add }
})
