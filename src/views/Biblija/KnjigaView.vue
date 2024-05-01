<template>
  <div>
    <AppBar title="Читање">
      <template v-slot:leading>
        <RouterLink :to="{ name: 'sveto-pismo' }">
          <IconButton icon="fa-solid fa-arrow-left" />
        </RouterLink>
      </template>
    </AppBar>

    <div class="flex flex-col px-3 gap-3">
      <CardPlain v-if="knjiga.length">
        <div class="flex flex-col py-4 gap-3">
          <div class="mx-4">
            <h1 class="text-xl font-bold text-primary">{{ knjigaInfo.naslov }}</h1>
            <h2 class="italic text-primary">
              {{ naslovPoglavlja }}
            </h2>
          </div>
          <div class="flex flex-col gap-2">
            <StihItem
              v-for="(stih, index) in knjiga[idPoglavlja].stihovi"
              :key="index"
              :stih="stih"
              :index="index + 1"
            />
          </div>
          <label class="text-primary italic">Извор: {{ verzija.izvor }}</label>
        </div>
      </CardPlain>
    </div>

    <KontroleBar
      v-if="knjiga.length"
      :naslov-poglavlja="naslovPoglavlja"
      :id-verzije="idVerzije"
      :id-knjige="idKnjige"
      :id-poglavlja="idPoglavlja"
    />
  </div>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import IconButton from '@/components/IconButton.vue'
import { useBiblijaStore } from '@/stores/BiblijaStore'
import CardPlain from '@/components/CardPlain.vue'
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import StihItem from './StihItem.vue'
import KontroleBar from './KontroleBar.vue'

const biblijaStore = useBiblijaStore()
const route = useRoute()

const idVerzije = parseInt(route.params.idVerzije)
const idKnjige = parseInt(route.params.idKnjige)
const idPoglavlja = parseInt(route.params.idPoglavlja)

const verzija = biblijaStore.verzije.find((verzija) => verzija.id === idVerzije)
const knjigaInfo = biblijaStore[`knjige${idVerzije}`].find((knjiga) => knjiga.id === idKnjige)

const naslovPoglavlja = `${idPoglavlja + 1}. ${knjigaInfo.naslov}`

const path = `../../podaci/biblija/${idVerzije}/knjige/${idKnjige}.json`
const knjiga = ref([])

const ucitajKnjigu = async () => {
  knjiga.value = (await import(path)).default
}

ucitajKnjigu()
</script>
