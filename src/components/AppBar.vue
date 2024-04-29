<template>
  <div class="top-0 sticky">
    <div class="flex justify-between items-center pt-3 px-3 bg-background">
      <h1 class="font-areal font-bold text-3xl text-primary">{{ $route.meta.naslov }}</h1>

      <div class="flex justify-center items-center">
        <!-- Dobrodosli -->
        <RouterLink :to="{ name: 'dobrodosli' }">
          <IconButton icon="fa-regular fa-circle-question" class="mr-6" />
        </RouterLink>
        <!-- Informacije -->
        <RouterLink :to="{ name: 'informacije' }">
          <IconButton icon="fa-solid fa-ellipsis-vertical" />
        </RouterLink>
      </div>
    </div>
    <div class="h-4 bg-gradient-to-b from-background to-transparent"></div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import IconButton from './IconButton.vue'
</script>
