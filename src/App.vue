<template>
  <div>
    <AppBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>
