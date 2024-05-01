<template>
  <CardPlain>
    <div class="flex flex-col gap-3 p-1">
      <h1 class="text-xl font-bold text-primary">{{ molitva.naslov }}</h1>
      <p class="whitespace-pre text-wrap tracking-wide">{{ molitva.telo }}</p>
      <label class="text-primary italic">Извор: {{ molitva.izvor }}</label>
    </div>
  </CardPlain>
</template>

<script setup>
import CardPlain from '@/components/CardPlain.vue'

defineProps({ molitva: Object })
</script>
