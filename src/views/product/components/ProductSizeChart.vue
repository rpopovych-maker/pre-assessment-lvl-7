<template>
  <div>
    <ul class="flex items-center gap-5 mb-3 md:mb-2">
      <li v-for="format in sizeChart.formats" :key="format">
        <el-button
          :class="{ 'text-secondary': selectedFormat === format }"
          link
          @click="selectedFormat = format"
        >
          {{ productService.sizeFormatLabels[format] }}
        </el-button>
      </li>
    </ul>

    <ul class="grid grid-cols-5 gap-3">
      <li v-for="row in sizeChart.rows" :key="row.id">
        <AppRadioButton
          name="product-size"
          :value="row"
          :checked="row.id === selectedSize?.id"
          :disabled="row.outOfStock"
          @change="selectedSize = $event"
        >
          {{ row[selectedFormat] }}
        </AppRadioButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { productService } from '@/views/product/product.service'

defineProps<{
  sizeChart: ISizeChart
}>()

const selectedFormat = defineModel<TSizeFormat>('format', { required: true })
const selectedSize = defineModel<ISizeRow | null>('size', { required: true })
</script>
