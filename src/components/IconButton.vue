<template>
  <div class="flex justify-center py-1 px-2 cursor-pointer text-primary text-2xl">
    <i :class="props.icon"></i>
  </div>
</template>

<script setup>
const props = defineProps({ icon: String })
</script>
