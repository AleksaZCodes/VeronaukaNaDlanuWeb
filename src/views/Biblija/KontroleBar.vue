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

    <CardPlain class="flex-auto min-w-0">
      <div class="p-1">
        <h2 class="italic text-primary truncate">{{ naslovPoglavlja }}</h2>
      </div>
    </CardPlain>

    <CardPlain>
      <IconButton
        @click="biblijaStore.toggleZakacenaKnjiga(idVerzije, idKnjige, idPoglavlja)"
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
import { computed } from 'vue'

const props = defineProps({
  naslovPoglavlja: String,
  idVerzije: Number,
  idKnjige: Number,
  idPoglavlja: Number,
  brojPoglavlja: Number
})

const biblijaStore = useBiblijaStore()
const knjiga = biblijaStore[`knjige${props.idVerzije}`].find(
  (knjiga) => knjiga.id === props.idKnjige
)

const brojPoglavlja = props.brojPoglavlja
const idPrethodnogPoglavlja = computed(
  () => (((props.idPoglavlja - 1) % brojPoglavlja) + brojPoglavlja) % brojPoglavlja
)
const idSledecegPoglavlja = computed(() => (props.idPoglavlja + 1) % brojPoglavlja)
</script>
