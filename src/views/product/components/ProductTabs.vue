<template>
  <div class="rounded-xl bg-neutral-100 p-4">
    <div role="tablist" class="flex gap-4 mb-4">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        role="tab"
        :aria-selected="activeTab.name === tab.name"
        :tabindex="activeTab.name === tab.name ? 0 : -1"
        class="relative transition-colors hover:text-secondary outline-none focus-visible:text-secondary"
        :class="{
          'text-secondary font-bold': activeTab.name === tab.name
        }"
        @click="activeTab = tab"
      >
        <span class="invisible font-bold">{{ tab.label }}</span>
        <span class="absolute inset-0 flex items-center justify-center">{{ tab.label }}</span>
      </button>
    </div>

    <hr class="border-neutral-300 mb-4">

    <Transition name="fade" mode="out-in" :duration="100">
      <div :key="activeTab.name" role="tabpanel">
        <div v-if="activeTab.contentType === 'html'" v-html="activeTab.content" />
        <ProductLabelValueList
          v-else-if="activeTab.contentType === 'list' && activeTab.items"
          :items="activeTab.items"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface ITab {
  label: string
  name: string
  contentType: 'html' | 'list'
  content?: string
  items?: ILabelValue[]
}

const productStore = useProductStore()

const tabs: ITab[] = [
  {
    label: 'Description',
    name: 'description',
    contentType: 'html',
    content: productStore.product?.description
  },
  {
    label: 'Details',
    name: 'details',
    contentType: 'list',
    items: productStore.product?.details
  },
  {
    label: 'Shipping',
    name: 'shipping',
    contentType: 'html',
    content: productStore.product?.shippingInfo
  }
]

const activeTab = ref<ITab>(tabs[0]!)
</script>
