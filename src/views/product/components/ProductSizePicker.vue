<template>
  <div class="space-y-3 md:space-y-2">
    <h2>
      <span class="font-bold">Size: </span>
      <span>
        {{ selectedSizeRow?.[selectedSizeFormat] }}
        {{ productService.sizeFormatLabels[selectedSizeFormat] }}
      </span>
    </h2>

    <ProductSizeChart
      v-model:format="selectedSizeFormat"
      v-model:size="selectedSizeRow"
      :sizeChart="selectedProductVariant!.sizeChart"
    />

    <div class="flex justify-end">
      <el-button link @click="openModal('ProductSizeGuideModal')">
        Size Guide
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productService } from '@/views/product/product.service'
const { openModal } = useModals()

const { selectedProductVariant, selectedSizeRow } = storeToRefs(useProductStore())

const selectedSizeFormat = ref<TSizeFormat>('UK')
</script>
