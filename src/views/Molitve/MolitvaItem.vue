<template>
  <CardItem
    :title="props.molitva.naslov"
    :text="props.molitva.telo"
    @click="$router.push({ name: 'molitva', params: { ids: [props.molitva.id] } })"
    class="cursor-pointer"
  >
    <IconButton
      @click.stop="molitveStore.toggleZakacena(props.molitva.id)"
      :icon="'text-xl fa-bookmark ' + (props.molitva.zakacena ? 'fa-solid' : 'fa-regular')"
    />
  </CardItem>
</template>

<script setup>
import CardItem from '@/components/CardItem.vue'
import IconButton from '@/components/IconButton.vue'
import { useMolitveStore } from '@/stores/MolitveStore'

const props = defineProps({ molitva: Object })
const molitveStore = useMolitveStore()
</script>
