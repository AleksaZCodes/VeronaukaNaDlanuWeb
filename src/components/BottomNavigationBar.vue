<template>
  <div class="absolute bottom-0 mt-1 bg-background">
    <div class="flex justify-around items-center w-screen py-4">
      <RouterLink v-for="r in sortRoutes($router.getRoutes())" :key="r.name" :to="{ name: r.name }">
        <IconButton
          :icon="r.meta.ikonica"
          :class="r.meta.naslov === $route.meta.naslov ? 'text-primary' : 'text-surfaceVariant'"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import IconButton from './IconButton.vue'

const sortRoutes = (routes) => {
  return routes.filter((r) => r.meta.ikonica).sort((a, b) => a.meta.indeks > b.meta.indeks)
}
</script>
