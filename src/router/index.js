import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView,
    },
    {
      path: '/app',
      name: 'home',
      meta: {
        naslov: 'Помаже Бог!'
      },
      component: HomeView,
    },
    {
      path: '/app/dobrodosli',
      name: 'dobrodosli',
      meta: {
        naslov: 'Добродошли!'
      },
      component: HomeView,
    },
    {
      path: '/app/informacije',
      name: 'informacije',
      meta: {
        naslov: 'Информације'
      },
      component: HomeView
    }
  ]
})

export default router
