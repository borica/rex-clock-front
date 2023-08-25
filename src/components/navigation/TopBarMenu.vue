<script setup lang="ts">
import DinoLogo from "@/components/icons/DinoLogo.vue";
import AvatarLogo from "@/components/icons/AvatarLogo.vue";
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <router-link
          class="flex items-center ml-5 lg:ml-0"
          to="Dashboard"
      >
        <DinoLogo
            class="h-[35px] opacity-60"
            alt="logo"
        />
        <div class="self-center logo-font whitespace-nowrap dark:text-gray-100 p-3">
          <span class="logo-thin">Rex</span>
          <span class="logo-bold">Clock</span>
        </div>
      </router-link>
      <div class="flex items-center md:order-2 mr-5 lg:mr-0">
        <button type="button" class="flex text-sm bg-gray-800 dark:bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <AvatarLogo class="w-10 h-10 p-1.5 text-gray-500 -left-1" id="navbar-user" />
          <span class="sr-only">Open user menu</span>
        </button>
        <div class="font-medium ml-3 dark:text-white">
          <div>Username</div>
          <div class="text-sm text-gray-500 dark:text-gray-300">Company</div>
        </div>
        <!-- Dropdown menu -->
        <div class="z-50 hidden mb-4 mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <ul class="py-3" aria-labelledby="user-menu-button">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
  .logo-font {
    font-family: var(--merriweather);
    font-size: 1.2rem;
  }
  .logo-thin {
    font-weight: var(--merriweather-thin);
  }
  .logo-font {
    font-weight: var(--merriweather-bold);
  }
</style>
