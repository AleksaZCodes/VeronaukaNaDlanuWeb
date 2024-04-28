<template>
  <div>
    <AppBar />
    <RouterView />
    <BottomNavigationBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import BottomNavigationBar from './components/BottomNavigationBar.vue'
</script>
