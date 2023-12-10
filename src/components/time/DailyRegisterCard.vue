<template>
  <div class="block max-w-sm py-6 px-10 border rounded-lg shadow dark:bg-gray-200 dark:border-gray-300">
    <h5 class="mb-2 text-2xl font-bold text-center text-gray-900">Today Registers</h5>
    <ol class="relative mt-10 border-s-4 border-blue-700">
      <li v-for="row in this.dailyRows" :key="row.time" class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-3 h-3 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-blue-900 dark:bg-orange-600"></span>
        <h3 class="flex items-center justify-between mb-1 text-lg font-semibold text-gray-900">{{ row.time }}
          <span v-if="row.isLatest" class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>
        </h3>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    dailyRows: {
      type: Array,
      required: true
    }
  })
</script>

<style scoped>

</style>