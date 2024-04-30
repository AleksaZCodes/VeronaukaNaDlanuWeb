<template>
  <div class="flex flex-col gap-3">
    <MolitvaCard v-for="molitva in molitveStore.zakacene" :key="molitva.id" :molitva="molitva" />
    <MolitvaCard v-for="molitva in molitveStore.ostale" :key="molitva.id" :molitva="molitva" />
  </div>
</template>

<script setup>
import { useMolitveStore } from '@/stores/MolitveStore'
import MolitvaCard from './MolitvaItem.vue'

const molitveStore = useMolitveStore()
</script>
