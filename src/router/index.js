import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MolitveView from '@/views/Molitve/MolitveView.vue'
import MolitvaView from '@/views/Molitve/MolitvaView.vue'
import BiblijaView from '@/views/Biblija/BiblijaView.vue'
import KnjigaView from '@/views/Biblija/KnjigaView.vue'

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
        indeks: 0,
        appBar: true,
        bottomNavigationBar: true
      },
      component: HomeView
    },
    {
      path: '/app/molitve',
      name: 'molitve',
      meta: {
        naslov: 'Молитве',
        ikonica: 'fa-solid fa-person-praying',
        indeks: 1,
        appBar: true,
        bottomNavigationBar: true
      },
      component: MolitveView
    },
    {
      path: '/app/sveto-pismo',
      name: 'sveto-pismo',
      meta: {
        naslov: 'Свето Писмо',
        ikonica: 'fa-solid fa-book-bible',
        indeks: 2,
        appBar: true,
        bottomNavigationBar: true
      },
      component: BiblijaView
    },
    {
      path: '/app/kalendar',
      name: 'kalendar',
      meta: {
        naslov: 'Календар',
        ikonica: 'fa-regular fa-calendar',
        indeks: 3,
        appBar: true,
        bottomNavigationBar: true
      },
      component: HomeView
    },
    {
      path: '/app/dobra-dela',
      name: 'dobra-dela',
      meta: {
        naslov: 'Добра дела',
        ikonica: 'fa-solid fa-hand-holding-heart',
        indeks: 4,
        appBar: true,
        bottomNavigationBar: true
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
    },
    {
      path: '/app/molitve/:ids+',
      name: 'molitva',
      component: MolitvaView
    },
    {
      path: '/app/sveto-pismo/:idVerzije/:idKnjige/:idPoglavlja',
      name: 'knjiga',
      component: KnjigaView
    }
  ]
})

export default router
