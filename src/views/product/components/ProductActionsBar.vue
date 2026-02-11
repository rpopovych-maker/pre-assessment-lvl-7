<template>
  <div class="flex items-center gap-3">
    <el-badge
      :value="cartItemQuantity"
      :show-zero="false"
      class="flex-1"
      type="info"
      :offset="[-5, 0]"
    >
      <el-button class="w-full" type="primary" @click="addToCart">
        <Icon class="mr-3" name="cart" width="24" height="24" />
        <span>Add to Cart</span>
      </el-button>
    </el-badge>

    <ProductLikeBtn
      class="hidden md:flex"
      :is-liked="!!productStore.product?.isFavourite"
      @click="productStore.toggleFavorite(productStore.product!.id)"
    />

    <el-badge
      value="✓"
      :hidden="!compareStore.isInCompareList(productStore.product!.id)"
      type="success"
      :offset="[-16, 7]"
      @click="toggleCompareList"
    >
      <el-button class="is-square" text>
        <Icon name="compare" width="24" height="24" />
      </el-button>
    </el-badge>
  </div>
</template>

<script setup lang="ts">
const productStore = useProductStore()
const cartStore = useCartStore()
const compareStore = useCompareStore()

const cartItemQuantity = computed(() => {
  if (!productStore.cartItemPayload) return 0
  return cartStore.getQuantity(productStore.cartItemPayload)
})

function addToCart () {
  if (!productStore.cartItemPayload) {
    ElMessage.warning('Please select color and size')
    return
  }
  cartStore.add(productStore.cartItemPayload)
    .then(() => ElMessage.success('Item added to cart'))
}

function toggleCompareList () {
  if (!productStore.product) return

  if (!compareStore.isInCompareList(productStore.product.id)) {
    ElMessage.success('Item added to compare list')
  }

  compareStore.toggle(productStore.product.id)
}
</script>
