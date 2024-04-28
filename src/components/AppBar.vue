<template>
  <div
    class="flex justify-between items-center py-2 px-3 text-primary bg-background font-areal font-bold text-2xl sticky"
  >
    <h1>{{ $route.meta.naslov }}</h1>

    <div class="flex justify-center items-center">
      <!-- Dobrodosli -->
      <RouterLink :to="{ name: 'dobrodosli' }">
        <div class="flex justify-center p-1 mr-2 cursor-pointer">
          <i class="fa-regular fa-circle-question"></i>
        </div>
      </RouterLink>
      <!-- Informacije -->
      <RouterLink :to="{ name: 'informacije' }">
        <div class="flex justify-center p-1 w-7 cursor-pointer">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
