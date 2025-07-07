import type { Table } from 'dexie'
import Dexie from 'dexie'

import type { ComponentData } from './type'

export interface StoreComponentData extends ComponentData {
  id?: number
  pageId?: string // 添加页面ID字段
}

export class SnapShotDexie extends Dexie {
  snapshot!: Table<StoreComponentData>

  constructor() {
    super('snapshot')
    // 版本1：原始结构
    this.version(1).stores({
      snapshot: '++id, canvasData, canvasStyle, dataSlotters'
    })
    // 版本2：添加pageId索引
    this.version(2).stores({
      snapshot: '++id, canvasData, canvasStyle, dataSlotters, pageId'
    })
  }
}

export const snapshotDb = new SnapShotDexie()
