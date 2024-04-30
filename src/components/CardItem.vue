<template>
  <div>
    <CardPlain class="mx-3">
      <div class="flex justify-between items-center">
        <div class="flex flex-col min-w-0">
          <h2 class="text-primary font-bold">{{ props.title }}</h2>
          <label class="italic text-sm truncate">{{ props.text }}</label>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </CardPlain>
  </div>
</template>

<script setup>
import CardPlain from '@/components/CardPlain.vue'

const props = defineProps({ title: String, text: String })
</script>
