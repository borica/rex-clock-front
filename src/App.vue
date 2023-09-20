<template>
  <TopBarMenu
    v-if="authStore.isAuth"
  />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import TopBarMenu from "@/components/navigation/TopBarMenu.vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips } from 'flowbite'
import { useAuthStore } from "@/store/auth/AuthStore";

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
})

const authStore = useAuthStore()

</script>

<style>
  body {
    font-family: var(--merriweather);
    font-weight: var(--merriweather-regular);
  }
</style>
