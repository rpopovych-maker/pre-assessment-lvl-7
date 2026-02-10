<template>
  <div>
    <h2>
      <span class="font-bold">Size: </span>
      <span>
        {{ selectedSizeRow?.[selectedSizeFormat] }}
        {{ productService.sizeFormatLabels[selectedSizeFormat] }}
      </span>
    </h2>

    <div class="space-y-2">
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
  </div>
</template>

<script setup lang="ts">
import { productService } from '@/views/product/product.service'
const { openModal } = useModals()

const productStore = useProductStore()
const { selectedProductVariant, selectedSizeRow } = storeToRefs(productStore)

const selectedSizeFormat = ref<TSizeFormat>('UK')
</script>
