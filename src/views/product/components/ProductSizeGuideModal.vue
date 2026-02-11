<template>
  <el-dialog
    :model-value="isOpen.ProductSizeGuideModal"
    title="Size Guide"
    :before-close="() => closeModal('ProductSizeGuideModal')"
    align-center
    destroy-on-close
    width="90%"
    lock-scroll
    class="max-w-[800px] md:p-6"
  >
    <span class="font-bold text-base md:text-[22px] block mb-3 text-slate">How to measure shoe size?</span>

    <div class="flex flex-col md:flex-row-reverse gap-6">
      <img
        class="block mx-auto object-contain"
        src="/src/assets/images/size-guide.png"
        alt="Size guide"
      >

      <div>
        <p class="text-slate">
          Follow the simple steps below to determine your shoe size. Make sure you do this during or at
          the end of day to ensure the right size (feet typically swell during the day).
        </p>

        <br>

        <ol class="list-decimal text-slate pl-5">
          <li v-for="(step, index) in steps" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const { isOpen, closeModal } = useModals()

const steps = [
  'Put a piece of blank paper under your feet. Stand up straight and have your heel lightly touching against the wall.',

  'Have someone mark the end of the longest toe and the back of your heel on the sheet with a pen or pencil. Afterwards measure the length of your feet from heel to toe.',

  'Repeat the steps for your other foot and compare it with our size chart below.'
]
</script>
