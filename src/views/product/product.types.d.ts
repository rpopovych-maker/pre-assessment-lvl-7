interface ILabelValue {
  label: string
  value: string
}

interface IProductImage {
  large: string
}

type TSizeFormat = 'UK' | 'US' | 'EU' | 'cm'

interface ISizeRow {
  UK: number
  US: number
  EU: number
  cm: number
  outOfStock?: boolean
  id: string
}

interface ISizeChart {
  formats: TSizeFormat[]
  rows: ISizeRow[]
}

interface ISizeOption {
  value: number
  disabled?: boolean
}

interface IProductVariant {
  id: string
  colorName: string
  price: number
  outOfStock: boolean
  thumbnail: string
  images: IProductImage[]
  sizeChart: ISizeChart
}

interface ICartItemPayload {
  productId: string
  variantId: string
  sizeRowId: string
}

interface ICartItem extends ICartItemPayload {
  quantity: number
}

interface IProduct {
  id: string
  name: string
  category: string
  isFavourite: boolean
  description: string
  details: ILabelValue[]
  shippingInfo: string
  variants: IProductVariant[]
}
