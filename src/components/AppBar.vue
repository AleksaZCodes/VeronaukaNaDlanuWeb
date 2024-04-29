<template>
  <div class="flex justify-between items-center py-4 px-4 mb-1 bg-background sticky top-0">
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
</template>

<script setup>
import { RouterLink } from 'vue-router'
import IconButton from './IconButton.vue'
</script>
