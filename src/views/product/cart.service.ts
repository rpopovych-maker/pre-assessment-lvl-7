class CartService {
  addToCart (item: ICartItemPayload) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item)
      }, 500)
    })
  }
}

export const cartService = new CartService()
