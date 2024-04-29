<template>
  <div>
    <AppBar v-if="$route.meta.indeks !== undefined" />
    <RouterView />
    <BottomNavigationBar v-if="$route.meta.indeks !== undefined" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import BottomNavigationBar from './components/BottomNavigationBar.vue'
</script>
