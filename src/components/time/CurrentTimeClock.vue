<template>
  <div>
    {{ time }}
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from "vue"
  const date = new Date()
  const getParsedTime = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getUTCSeconds()}`
  }
  const time = ref(getParsedTime(date))

  onBeforeMount(() => {
    setInterval(() => {
      time.value = getParsedTime(new Date())
    }, 1000)
  })


</script>

<style scoped>

</style>