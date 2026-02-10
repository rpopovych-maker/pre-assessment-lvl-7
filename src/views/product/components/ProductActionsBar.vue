<template>
  <div class="flex items-center">
    <ProductAddToCartBtn class="flex-1" @click="productStore.addToCart()" />
    <ProductLikeBtn
      class="hidden md:flex"
      :is-liked="productStore.product!.isFavourite"
      @click="productStore.toggleFavorite(productStore.product!.id)"
    />
    <ProductCompareBtn />
  </div>
</template>

<script setup lang="ts">
const productStore = useProductStore()
</script>
