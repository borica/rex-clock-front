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
              required="required"
          />
        </div>
        <div>
          <label class="text-gray-600 inline-block pb-2" for="name">Nome</label>
          <input
              class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="text"
              id="name"
              placeholder="Tyrannosaurus Rex"
              v-model="name"
              autocomplete="true"
          />
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
          />
        </div>
        <div>
          <input
              class="bg-green-950 hover:bg-green-800 w-full py-2 rounded-md text-white font-bold cursor-pointer"
              type="submit"
              value="Cadastrar"
              @click="createUser"
          />
        </div>
        <div class="text-center">
          Ja possui uma conta ?
          <router-link to="/" class="text-gray-600 underline">
            Realize o login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import DinoLogo from "@/components/icons/DinoLogo.vue"
import { UserService } from "@/services/UserService"

const userService = new UserService()

const email = ref('')
const password = ref('')
const name = ref('')

const createUser = async () => {
  await userService.createUser({
    'email': email.value,
    'name': name.value,
    'password': password.value,
  })
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