<template>
  <div class="bg-gray-50 h-screen w-screen flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
      <DinoLogo
        class="h-[150px] w-[150px] opacity-80 mb-5"
        alt="logo"
      />
      <h1 class="text-xl opacity-80 logo-font text-center mb-10">
        <span class="logo-thin">Rex</span>
        <span class="logo-bold">Clock</span>
      </h1>
      <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm rounded">
        <div>
          <label class="text-gray-600 inline-block pb-2" for="email">Email</label>
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="email"
            id="email"
            placeholder="tyranossaurus@rex.com"
            v-model="email"
            autocomplete="true"
          >
        </div>
        <div>
          <label class="text-gray-600 inline-block pb-2" for="password">Senha</label>
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="password"
            id="password"
            placeholder="*********"
            v-model="password"
            autocomplete="true"
          >
        </div>
        <div class="text-center">
          <a class="text-gray-600 underline" href="">Esqueci minha senha</a>
        </div>
        <div>
          <input
            class="bg-gray-800 hover:bg-gray-700 w-full py-2 rounded-md text-white font-bold cursor-pointer"
            type="submit"
            value="Login"
            @click="login"
          >
        </div>
        <div>
          <input
            class="bg-green-950 hover:bg-green-800 w-full py-2 rounded-md text-white font-bold cursor-pointer"
            type="submit"
            value="Cadastrar"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { AuthService } from '@/services/AuthService'
import { useRouter } from 'vue-router'
import DinoLogo from "@/components/icons/DinoLogo.vue";
import { onBeforeMount } from 'vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const authService = new AuthService()

onBeforeMount(() => {
  const hasToken = sessionStorage.getItem('token') || false
  redirectLoggedUser(hasToken)
})

async function login() {
  if (email.value && password.value) {
    await authService.login(email.value, password.value)

    redirectLoggedUser()
  }
}

function redirectLoggedUser () {
  if (authService.getToken()) {
    router.push({
      'name': 'dashboard'
    })
  }
}
</script>

<style scoped>
  .logo-font {
    font-family: var(--merriweather);
    font-size: 2.5rem;
  }
  .logo-thin {
    font-weight: var(--merriweather-thin);
  }
  .logo-font {
    font-weight: var(--merriweather-bold);
  }
</style>