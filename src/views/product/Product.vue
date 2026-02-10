<template>
  <ProductLayout v-loading="productStore.loading">
    <template v-if="productStore.product && productStore.selectedProductVariant">
      <ProductOverviewSection class="mb-8 md:mb-12" />
      <ProductDescriptionSection />
      <ProductActionsBar class="sticky bottom-0 bg-white z-20 md:hidden py-6" />
    </template>
  </ProductLayout>
</template>

<script setup lang="ts">
const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProduct()
})
</script>
