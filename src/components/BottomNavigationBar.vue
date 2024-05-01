<template>
  <BottomBar>
    <RouterLink v-for="r in sortRoutes($router.getRoutes())" :key="r.indeks" :to="{ name: r.name }">
      <IconButton
        :icon="
          r.meta.ikonica +
          ' ' +
          (r.meta.naslov === $route.meta.naslov ? 'text-primary' : 'text-outlineVariant')
        "
      />
    </RouterLink>
  </BottomBar>
</template>

<script setup>
import BottomBar from './BottomBar.vue'
import IconButton from './IconButton.vue'

const sortRoutes = (routes) => {
  return routes.filter((r) => r.meta.ikonica).sort((a, b) => a.meta.indeks - b.meta.indeks)
}
</script>
