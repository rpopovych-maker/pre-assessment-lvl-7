
class ProductService {
  currencyFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  sizeFormatLabels: Record<TSizeFormat, string> = {
    UK: 'UK',
    US: 'US',
    EU: 'EU',
    cm: 'Foot Length (cm)'
  }

  formatPrice (price: number) {
    return this.currencyFormater.format(price)
  }

  async fetchProduct (): Promise<IProduct> {
    const { default: data } = await import('./product.mock.json')
    await new Promise(resolve => setTimeout(resolve, 1000))
    return data as unknown as IProduct
  }

  addToCart (id: string) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(id)
      }, 500)
    })
  }

  toggleFavorite (id: string, isFavorite: boolean) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id, isFavorite })
      }, 500)
    })
  }
}

export const productService = new ProductService()
