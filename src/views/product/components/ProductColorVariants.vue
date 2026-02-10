<template>
  <div>
    <h2 class="mb-3">
      <span class="font-bold">Colour: </span>
      <span>{{ selectedProductVariant?.colorName }}</span>
    </h2>

    <AppScrollContainer content-class="gap-2 md:gap-4">
      <el-tooltip
        v-for="(variant, index) in variants"
        :key="variant.id"
        content="Sold out"
        placement="top"
        :show-after="300"
        :disabled="!variant.outOfStock"
      >
        <ProductThumbnail
          class="md:w-[100px] md:h-[70px]"
          :src="variant.images[0]!.thumbnail!"
          :alt="variant.colorName"
          :disabled="variant.outOfStock"
          :is-selected="variant.id === selectedProductVariant?.id"
          @click="productStore.selectVariant(index)"
        />
      </el-tooltip>
    </AppScrollContainer>
  </div>
</template>

<script setup lang="ts">
const productStore = useProductStore()
const { product, selectedProductVariant } = storeToRefs(productStore)

const variants = computed(() => product.value?.variants || [])
</script>
