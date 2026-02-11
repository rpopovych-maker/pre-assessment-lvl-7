<template>
  <div>
    <h2 class="mb-3 md:mb-2">
      <span class="font-bold">Colour: </span>
      <span>{{ productStore.selectedProductVariant?.colorName }}</span>
    </h2>

    <AppScrollContainer content-class="gap-2 md:gap-4">
      <el-tooltip
        v-for="variant in productStore.variants"
        :key="variant.id"
        content="Sold out"
        placement="top"
        :show-after="300"
        :disabled="!variant.outOfStock"
      >
        <ProductThumbnail
          class="md:w-[100px] md:h-[70px]"
          :src="variant.thumbnail"
          :alt="variant.colorName"
          :disabled="variant.outOfStock"
          :is-selected="variant.id === productStore.selectedProductVariant?.id"
          @click="productStore.selectVariant(variant.id)"
        />
      </el-tooltip>
    </AppScrollContainer>
  </div>
</template>

<script setup lang="ts">
const productStore = useProductStore()
</script>
