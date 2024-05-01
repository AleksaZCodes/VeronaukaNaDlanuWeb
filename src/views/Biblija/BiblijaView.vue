<template>
  <div class="flex flex-col px-3 gap-3">
    <KnjigaItem v-for="knjiga in biblijaStore.zakaceneKnjige" :key="knjiga.id" :knjiga="knjiga" />
    <KnjigaItem v-for="knjiga in biblijaStore.ostaleKnjige" :key="knjiga.id" :knjiga="knjiga" />
  </div>
</template>

<script setup>
import { useBiblijaStore } from '@/stores/BiblijaStore'
import KnjigaItem from './KnjigaItem.vue'

const biblijaStore = useBiblijaStore()
</script>
