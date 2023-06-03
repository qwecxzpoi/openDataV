import { shallowRef } from 'vue'

import { DataType } from '../const'
import Static from './View.vue'

export default {
  type: DataType.STATIC,
  name: '静态数据',
  component: shallowRef(Static)
}