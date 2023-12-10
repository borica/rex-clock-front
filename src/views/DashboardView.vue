<template>
  <div class="container mt-10 mx-auto">
    <div class="grid grid-flow-row-dense grid-cols-12">
      <div class="col-start-3 col-span-4">
        <RegisterCard />
      </div>
      <div class="col-span-4">
        Component mostrando quantidade de horas no banco de horas
      </div>
    </div>
    <div class="grid grid-flow-row-dense grid-cols-12">
      <div class="col-start-3 col-span-4">
        <DailyRegisterCard :daily-rows="dailyRegisters" />
      </div>
      <div class="col-span-4">
        Componente mostrando as ultimas ocorrencias
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import DailyRegisterCard from "@/components/time/DailyRegisterCard.vue";
import RegisterCard from "@/components/time/RegisterCard.vue";

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