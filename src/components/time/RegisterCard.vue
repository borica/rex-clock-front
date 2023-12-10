<template>
  <div class="block max-w-sm py-6 px-10 border rounded-lg shadow dark:bg-gray-200 dark:border-gray-300">
      <div class="flex flex-col items-center pb-10">
        <h2 class="text-gray-900 text-center text-3xl">
          <CurrentTimeClock />
        </h2>
        <div class="mt-4 md:mt-6 w-full">
          <button class="flex justify-center w-full items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

import CurrentTimeClock from "@/components/time/CurrentTimeClock.vue";
</script>

<style scoped>

</style>