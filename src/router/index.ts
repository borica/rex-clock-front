import {createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import {AuthService} from "@/services/AuthService";
import SignupView from "@/views/SignupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    }
  ]
})

router.beforeEach((to) => {
  const unauthenticatedRoutes = ['login', 'signup']
  const isAuth = AuthService.isAuthenticated()

  if (!unauthenticatedRoutes.includes(to.name) && !isAuth) {
    return '/'
  }
})

export default router
