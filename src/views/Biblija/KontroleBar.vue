<template>
  <BottomBar>
    <RouterLink
      :to="{
        name: 'knjiga',
        params: {
          idVerzije: idVerzije,
          idKnjige: idKnjige,
          idPoglavlja: idPrethodnogPoglavlja
        }
      }"
    >
      <CardPlain>
        <IconButton icon="fa-solid fa-arrow-left" />
      </CardPlain>
    </RouterLink>
    <CardPlain class="min-w-0">
      <div class="p-1">
        <h2 class="italic text-primary truncate">{{ naslovPoglavlja }}</h2>
      </div>
    </CardPlain>
    <CardPlain>
      <IconButton
        @click="biblijaStore.toggleZakacenaKnjiga(idKnjige, idPoglavlja)"
        :icon="`fa-bookmark ${knjiga.zakacena ? 'fa-solid' : 'fa-regular'}`"
      />
    </CardPlain>
    <RouterLink
      :to="{
        name: 'knjiga',
        params: {
          idVerzije: idVerzije,
          idKnjige: idKnjige,
          idPoglavlja: idSledecegPoglavlja
        }
      }"
    >
      <CardPlain>
        <IconButton icon="fa-solid fa-arrow-right" />
      </CardPlain>
    </RouterLink>
  </BottomBar>
</template>

<script setup>
import BottomBar from '@/components/BottomBar.vue'
import CardPlain from '@/components/CardPlain.vue'
import IconButton from '@/components/IconButton.vue'
import { useBiblijaStore } from '@/stores/BiblijaStore'

const props = defineProps({
  naslovPoglavlja: String,
  idVerzije: Number,
  idKnjige: Number,
  idPoglavlja: Number
})

const idVerzije = parseInt(props.idVerzije)
const idKnjige = parseInt(props.idKnjige)
const idPoglavlja = parseInt(props.idPoglavlja)

const biblijaStore = useBiblijaStore()
const knjiga = biblijaStore[`knjige${idVerzije}`].find((knjiga) => knjiga.id == idKnjige)

const poglavlja = knjiga.length
const idPrethodnogPoglavlja = (((idPoglavlja - 1) % poglavlja) + poglavlja) % poglavlja
const idSledecegPoglavlja = (idPoglavlja + 1) % poglavlja
</script>
