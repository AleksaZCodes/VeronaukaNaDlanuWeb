import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView
    },
    {
      path: '/app',
      name: 'pocetna',
      meta: {
        naslov: 'Помаже Бог!',
        ikonica: 'fa-solid fa-house',
        indeks: 0
      },
      component: HomeView
    },
    {
      path: '/app/molitve',
      name: 'molitve',
      meta: {
        naslov: 'Молитве',
        ikonica: 'fa-solid fa-person-praying',
        indeks: 1
      },
      component: HomeView
    },
    {
      path: '/app/sveto-pismo',
      name: 'sveto-pismo',
      meta: {
        naslov: 'Свето Писмо',
        ikonica: 'fa-solid fa-book-bible',
        indeks: 2
      },
      component: HomeView
    },
    {
      path: '/app/kalendar',
      name: 'kalendar',
      meta: {
        naslov: 'Календар',
        ikonica: 'fa-solid fa-calendar',
        indeks: 3
      },
      component: HomeView
    },
    {
      path: '/app/dobra-dela',
      name: 'dobra-dela',
      meta: {
        naslov: 'Добра дела',
        ikonica: 'fa-solid fa-hand-holding-heart',
        indeks: 4
      },
      component: HomeView
    },
    {
      path: '/app/dobrodosli',
      name: 'dobrodosli',
      meta: {
        naslov: 'Добродошли!'
      },
      component: HomeView
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
