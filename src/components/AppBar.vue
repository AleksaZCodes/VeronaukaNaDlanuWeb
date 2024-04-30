<template>
  <div class="top-0 sticky">
    <div class="flex justify-between items-center pt-3 px-3 bg-background">
      <h1 class="font-areal font-bold text-3xl text-primary">{{ props.title }}</h1>

      <div class="flex justify-center items-center">
        <slot></slot>
      </div>
    </div>
    <div class="h-4 bg-gradient-to-b from-background to-transparent"></div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String })
</script>
