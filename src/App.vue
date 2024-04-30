<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
      <AppBar :title="$route.meta.naslov" v-if="$route.meta.appBar !== undefined">
        <template v-slot:trailing>
          <!-- Dobrodosli -->
          <RouterLink :to="{ name: 'dobrodosli' }">
            <IconButton icon="fa-regular fa-circle-question" class="mr-3" />
          </RouterLink>
          <!-- Informacije -->
          <RouterLink :to="{ name: 'informacije' }">
            <IconButton icon="fa-solid fa-ellipsis-vertical"
          /></RouterLink>
        </template>
      </AppBar>
      <RouterView />
    </div>
    <BottomNavigationBar v-if="$route.meta.bottomNavigationBar !== undefined" />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import BottomNavigationBar from './components/BottomNavigationBar.vue'
import IconButton from './components/IconButton.vue'
</script>
