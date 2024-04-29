<template>
  <div>
    <CardPlain class="gap-2">
      <div class="flex flex-row items-baseline gap-2">
        <i class="text-primary text-base" :class="props.icon"></i>
        <label class="italic text-sm">{{ label }}</label>
      </div>
      <slot></slot>
      <RouterLink :to="{ name: link }" class="text-primary italic underline text-sm">{{
        linkText
      }}</RouterLink>
    </CardPlain>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import CardPlain from './CardPlain.vue'

const props = defineProps({ icon: String, label: String, link: String, linkText: String })
</script>
