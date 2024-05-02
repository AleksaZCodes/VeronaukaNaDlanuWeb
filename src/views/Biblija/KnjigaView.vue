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
          <label class="text-primary italic mx-4">Извор: {{ verzija.izvor }}</label>
        </div>
      </CardPlain>
    </div>

    <KontroleBar
      v-if="knjiga.length"
      :naslov-poglavlja="naslovPoglavlja"
      :id-verzije="idVerzije"
      :id-knjige="idKnjige"
      :id-poglavlja="idPoglavlja"
      :broj-poglavlja="knjiga.length"
    />
  </div>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import IconButton from '@/components/IconButton.vue'
import { useBiblijaStore } from '@/stores/BiblijaStore'
import CardPlain from '@/components/CardPlain.vue'
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import StihItem from './StihItem.vue'
import KontroleBar from './KontroleBar.vue'

const biblijaStore = useBiblijaStore()
const route = useRoute()

const idVerzije = computed(() => parseInt(route.params.idVerzije))
const idKnjige = computed(() => parseInt(route.params.idKnjige))
const idPoglavlja = computed(() => parseInt(route.params.idPoglavlja))

const verzija = computed(() =>
  biblijaStore.verzije.find((verzija) => verzija.id === idVerzije.value)
)
const knjigaInfo = computed(() =>
  biblijaStore[`knjige${idVerzije.value}`].find((knjiga) => knjiga.id === idKnjige.value)
)

const knjiga = ref([])
const poglavlje = computed(() => knjiga.value[idPoglavlja.value])
const naslovPoglavlja = computed(() => `${idPoglavlja.value + 1}. ${poglavlje.value.naslov}`)

const ucitajKnjigu = async () => {
  knjiga.value = (
    await import(`../../podaci/biblija/${idVerzije.value}/knjige/${idKnjige.value}.json`)
  ).default
}

ucitajKnjigu()
</script>
