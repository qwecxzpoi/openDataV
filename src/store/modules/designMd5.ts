import { defineStore } from 'pinia'
import store from '@/store'
import SparkMd5 from 'spark-md5'

const useDesignMd5 = defineStore({
  id: 'unload',
  state: () => ({
    md5: '',
    lastMd5: ''
  }),
  actions: {
    changeMd5(canvasDataStr: string) {
      const md5 = SparkMd5.hash(canvasDataStr)
      console.log(this.md5, this.lastMd5)
      if (this.md5 === '') {
        this.md5 = md5
      } else {
        this.lastMd5 = md5
      }
    }
  }
})

export function useDesignMd5WithOut() {
  return useDesignMd5(store)
}
