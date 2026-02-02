<template>
  <PuzzleLayout>
    <h1 class="mb-16 text-3xl font-bold">15 Puzzle</h1>

    <div class="grid lg:grid-cols-[1fr_auto_1fr] lg:gap-20 gap-10">
      <div class="hidden lg:block" />

      <PuzzleBoard class="lg:w-[400px]" />

      <div>
        <h2 class="mb-4 text-lg font-semibold">Game Records</h2>
        <PuzzleGameRecordsTable />
      </div>
    </div>
  </PuzzleLayout>
</template>
