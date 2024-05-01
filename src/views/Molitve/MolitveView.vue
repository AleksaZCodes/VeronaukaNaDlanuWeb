<template>
  <div class="flex flex-col px-3 gap-3">
    <MolitvaItem v-for="molitva in molitveStore.zakacene" :key="molitva.id" :molitva="molitva" />
    <MolitvaItem v-for="molitva in molitveStore.ostale" :key="molitva.id" :molitva="molitva" />
  </div>
</template>

<script setup>
import { useMolitveStore } from '@/stores/MolitveStore'
import MolitvaItem from './MolitvaItem.vue'

const molitveStore = useMolitveStore()
</script>
