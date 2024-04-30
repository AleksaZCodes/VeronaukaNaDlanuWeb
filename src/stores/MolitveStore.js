import { defineStore } from 'pinia'
import molitve from '@/podaci/molitve/molitve.json'

export const useMolitveStore = defineStore('molitve', {
  state: () => ({
    molitve
  }),
  getters: {
    zakacene() {
      return this.molitve.filter((molitva) => molitva.zakacena)
    },
    zakacenePocetna() {
      return [...this.zakacene, ...this.ostale].slice(0, 3)
    },
    ostale() {
      return this.molitve.filter((molitva) => !molitva.zakacena)
    }
  },
  actions: {
    toggleZakacena(id) {
      const molitva = this.molitve.find((molitva) => molitva.id === id)
      molitva.zakacena = !molitva.zakacena
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
