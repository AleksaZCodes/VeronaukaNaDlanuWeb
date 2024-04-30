<template>
  <div>
    <AppBar title="Молитвеник">
      <template v-slot:leading>
        <IconButton @click="$router.back()" icon="fa-solid fa-arrow-left" />
      </template>
    </AppBar>
    <div class="flex flex-col p-3 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
      <CardMolitva v-for="molitva in molitve" :key="molitva.key" :molitva="molitva" />
    </div>
  </div>
</template>

<script setup>
import { useMolitveStore } from '@/stores/MolitveStore'
import { useRoute } from 'vue-router'
import CardMolitva from './CardMolitva.vue'
import AppBar from '@/components/AppBar.vue'
import IconButton from '@/components/IconButton.vue'

const molitveStore = useMolitveStore()
const route = useRoute()

let molitve = []
route.params.ids.forEach((id) => molitve.push(molitveStore.molitve[id]))
</script>
