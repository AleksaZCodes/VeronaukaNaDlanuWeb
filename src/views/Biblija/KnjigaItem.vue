<template>
  <CardItem
    :title="knjiga.naslov"
    :text="`${knjiga.kategorija} / ${knjiga.potkategorija}`"
    @click="
      $router.push({
        name: 'knjiga',
        params: {
          idVerzije: biblijaStore.idIzabraneVerzije,
          idKnjige: knjiga.id,
          idPoglavlja: knjiga.zakacena ? knjiga.zakacenoPoglavlje : 0
        }
      })
    "
    class="cursor-pointer"
  >
    <IconButton
      @click.stop="biblijaStore.toggleZakacenaKnjiga(biblijaStore.idIzabraneVerzije, knjiga.id, 0)"
      :icon="`text-xl fa-bookmark ${knjiga.zakacena ? 'fa-solid' : 'fa-regular'}`"
    />
  </CardItem>
</template>

<script setup>
import CardItem from '@/components/CardItem.vue'
import IconButton from '@/components/IconButton.vue'
import { useBiblijaStore } from '@/stores/BiblijaStore'

defineProps({ knjiga: Object })
const biblijaStore = useBiblijaStore()
</script>
