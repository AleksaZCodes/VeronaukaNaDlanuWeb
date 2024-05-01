<template>
  <div class="flex items-center gap-3">
    <label class="text-outline text-sm">{{ index }}</label>
    <p class="tracking-wide">
      {{ stih }}
    </p>
  </div>
</template>

<script setup>
defineProps({ index: Number, stih: String })
</script>
