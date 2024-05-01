import { defineStore } from 'pinia'
import verzije from '@/podaci/biblija/verzije.json'
import knjige0 from '@/podaci/biblija/0/knjige.json'

export const useBiblijaStore = defineStore('molitve', {
  state: () => ({
    verzije,
    idIzabraneVerzije: 0,
    knjige0
  }),
  getters: {
    sveKnjige() {
      return this[`knjige${this.idIzabraneVerzije}`]
    },
    zakaceneKnjige() {
      return this.sveKnjige.filter((knjiga) => knjiga.zakacena)
    },
    ostaleKnjige() {
      return this.sveKnjige.filter((knjiga) => !knjiga.zakacena)
    }
  },
  actions: {
    toggleZakacenaKnjiga(idVerzije, idKnjige, idPoglavlja) {
      const knjiga = this[`knjige${idVerzije}`].find((knjiga) => knjiga.id === idKnjige)
      knjiga.zakacena = !knjiga.zakacena
      knjiga.zakacenoPoglavlje = idPoglavlja
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  }
})
