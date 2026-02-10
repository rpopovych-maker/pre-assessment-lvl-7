<template>
  <PuzzleLayout>
    <div class="grid lg:grid-cols-[1fr_auto_1fr] lg:gap-16 gap-10 w-full">
      <div class="hidden lg:block" />

      <PuzzleBoard class="w-[90%] mx-auto lg:w-[400px]" />

      <div class="w-[90%] mx-auto lg:w-auto lg:mx-0 lg:max-w-xs">
        <h2 class="mb-4 text-lg font-semibold">Game Records</h2>
        <PuzzleGameRecordsTable />
      </div>
    </div>
  </PuzzleLayout>
</template>
