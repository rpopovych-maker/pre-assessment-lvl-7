<template>
  <el-button
    :aria-label="isLiked ? 'Remove from favorites' : 'Add to favorites'"
    class="is-square"
  >
    <Icon :name="isLiked ? 'like' : 'like-outline'" width="24" height="24" />
  </el-button>
</template>

<script setup lang="ts">
defineProps<{
  isLiked: boolean
}>()
</script>
