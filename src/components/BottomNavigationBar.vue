<template>
  <div class="sticky bottom-0">
    <div class="h-4 bg-gradient-to-t from-background to-transparent"></div>
    <div class="flex justify-around items-center w-screen py-3 bg-background">
      <RouterLink
        v-for="r in sortRoutes($router.getRoutes())"
        :key="r.indeks"
        :to="{ name: r.name }"
      >
        <IconButton
          :icon="
            r.meta.ikonica +
            ' ' +
            (r.meta.naslov === $route.meta.naslov ? 'text-primary' : 'text-outlineVariant')
          "
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import IconButton from './IconButton.vue'

const sortRoutes = (routes) => {
  return routes.filter((r) => r.meta.ikonica).sort((a, b) => a.meta.indeks - b.meta.indeks)
}
</script>
