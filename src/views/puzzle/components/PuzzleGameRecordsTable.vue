<template>
  <el-table
    class="rounded"
    :data="topScores"
    :allow-drag-last-column="false"
    empty-text="No game records"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      :formatter="(_row, _col, value) => dateFormatter(value)"
    />
    <el-table-column
      prop="moves"
      align="right"
      label="Moves"
    />
    <el-table-column
      prop="time"
      align="right"
      label="Time (s)"
    />
  </el-table>
</template>

<script lang="ts" setup>
const VISIBLE_SCORES = 10

const { gameRecords } = useGameRecords()

const topScores = computed(() => {
  return gameRecords.value.toSorted((a, b) => a.time - b.time).slice(0, VISIBLE_SCORES)
})

function dateFormatter (date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.el-table {
  --el-table-text-color: #ffffff;
  --el-table-header-text-color: #ffffff;
  --el-table-tr-bg-color: #2f0d68;
  --el-table-row-hover-bg-color: #2e0d68;
  --el-table-header-bg-color: #2e0d68;
  --el-text-color-secondary: #ffffff;
  --el-fill-color-blank: #2e0d68;
}
</style>
