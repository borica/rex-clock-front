 import { defineStore } from 'pinia'

 export type AuthStore = {
     isAuth: boolean
 }

 export const useAuthStore = defineStore({
     id: 'authStore',
     state: () => ({
         isAuth: false
     } as AuthStore),
     actions: {
        setIsAuthUser(isAuth: boolean) {
            this.isAuth = isAuth
        }
     },
     persist: true
 })
