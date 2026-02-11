<template>
  <section class="flex flex-col md:flex-row gap-6 lg:gap-x-12">
    <ProductGallery
      :images="selectedProductVariant!.images"
      :product-name="product?.name || ''"
      class="md:w-[52%]"
    >
      <template #overlay>
        <div class="absolute right-4 top-4 z-10 md:hidden">
          <ProductLikeBtn
            :is-liked="product!.isFavourite"
            @click.stop="productStore.toggleFavorite(product!.id)"
          />
        </div>
      </template>
    </ProductGallery>

    <div class="md:w-[48%] flex flex-col overflow-hidden">
      <div class="flex flex-col gap-2 md:gap-4 mb-6 md:mb-9">
        <h1 class="text-[28px] leading-9 md:leading-10 md:text-[32px] font-bold text-slate">
          {{ product!.name }}
        </h1>

        <div class="text-[22px] md:text-[24px] font-semibold leading-7 text-slate">
          {{ productService.formatPrice(selectedProductVariant!.price) }}
        </div>
      </div>

      <ProductColorVariants class="mb-6" />
      <ProductSizePicker />

      <ProductActionsBar class="hidden md:flex md:mt-6 lg:mt-9" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { productService } from '@/views/product/product.service'

const { product, selectedProductVariant } = storeToRefs(useProductStore())
const productStore = useProductStore()
</script>
