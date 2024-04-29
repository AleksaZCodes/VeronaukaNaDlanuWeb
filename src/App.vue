<template>
  <div class="flex flex-col h-screen justify-between">
    <AppBar v-if="$route.meta.indeks !== undefined" />
    <RouterView class="flex-auto" />
    <BottomNavigationBar v-if="$route.meta.indeks !== undefined" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import BottomNavigationBar from './components/BottomNavigationBar.vue'
</script>
