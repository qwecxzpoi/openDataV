import { defineStore } from 'pinia'
import store from '@/store'

const useDesignMd5 = defineStore({
  id: 'unload',
  state: () => ({
    md5: '',
    lastMd5: ''
  }),
  actions: {
    changeMd5(str: string) {
      if (this.md5 === '') {
        this.md5 = str
      } else {
        this.lastMd5 = str
      }
    }
  }
})

export function useDesignMd5WithOut() {
  return useDesignMd5(store)
}
