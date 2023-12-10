<template>
  <div class="container mx-auto">
    <div class="grid grid-flow-row-dense grid-cols-12">
      <div class="block col-start-3 col-span-4 max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-300">
      </div>
      <div class="col-span-4">
        <DailyRegisterCard :daily-rows="dailyRegisters" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import DailyRegisterCard from "@/components/information/DailyRegisterCard.vue";

const dailyRegisters = [
  {
    time: '8:00 AM',
    isLatest: false
  },
  {
    time: '12:00 PM',
    isLatest: false
  },
  {
    time: '13:00 PM',
    isLatest: false
  },
  {
    time: '17:00 PM',
    isLatest: true
  }
]

</script>

<style scoped>

</style>