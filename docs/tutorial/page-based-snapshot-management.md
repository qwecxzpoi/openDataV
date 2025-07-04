# 按页面快照管理

## 概述

新的快照管理系统支持为每个页面维护独立的快照历史，解决了之前所有页面共享快照导致的混乱问题。

## 主要特性

### 1. 页面隔离
- 每个页面拥有独立的快照历史
- 不同页面的撤销/重做操作互不影响
- 页面切换时自动切换到对应的快照上下文

### 2. 自动页面ID管理
- 编辑已保存页面时，使用页面的实际ID
- 创建新页面时，使用临时ID 'unsaved'
- 页面保存后可以迁移快照到新的页面ID

### 3. 向后兼容
- 支持旧版本的快照数据
- 数据库自动升级，添加pageId字段
- 旧快照数据不会丢失

## API 变更

### SnapshotState 新增方法

```typescript
// 设置当前页面ID
setCurrentPageId(pageId: string): void

// 获取当前页面ID  
getCurrentPageId(): string

// 清空指定页面的快照
clearSnapshot(pageId?: string): Promise<void>
```

### CanvasState 新增方法

```typescript
// 设置当前页面ID（同时更新快照状态）
setCurrentPageId(pageId: string): void

// 获取当前页面ID
getCurrentPageId(): string

// 页面切换处理
switchPage(newPageId: string): void
```

## 使用方式

### 1. 在设计器中设置页面ID

```typescript
import { useCanvasState } from '@open-data-v/designer'

const canvasState = useCanvasState()

// 编辑已保存的页面
const pageId = route.params.index as string
canvasState.setCurrentPageId(pageId || 'unsaved')

// 加载页面数据
const resp = await getPageApi(pageId)
if (resp.data) {
  designer.value!.setLayoutData(resp.data)
}
```

### 2. 快照操作

```typescript
import { useSnapshotState } from '@open-data-v/designer'

const snapshotState = useSnapshotState()

// 设置当前页面
snapshotState.setCurrentPageId('page-123')

// 创建快照（自动关联到当前页面）
snapshotState.saveSnapshot(canvasData, canvasStyle, dataSlotters)

// 撤销（仅影响当前页面）
const lastSnapshot = await snapshotState.lastRecord()

// 重做（仅影响当前页面）
const nextSnapshot = await snapshotState.nextRecord()

// 清空当前页面的快照
await snapshotState.clearSnapshot()

// 清空指定页面的快照
await snapshotState.clearSnapshot('page-456')

// 清空所有快照
await snapshotState.clearSnapshot('all')
```

### 3. 页面切换

```typescript
// 当用户切换到不同页面时
const newPageId = 'page-789'
canvasState.switchPage(newPageId)

// 这会自动：
// 1. 更新当前页面ID
// 2. 切换快照上下文
// 3. 重置游标位置
```

## 数据库结构

### 快照表结构

```typescript
interface StoreComponentData {
  id?: number           // 自增主键
  pageId?: string      // 页面ID（新增字段）
  canvasData: any[]    // 画布组件数据
  canvasStyle: any     // 画布样式
  dataSlotters: any[]  // 数据插槽
}
```

### 索引

- 主键：`id`
- 索引：`pageId` （用于快速查询特定页面的快照）

## 迁移指南

### 从旧版本升级

1. 数据库会自动升级到版本2
2. 旧的快照数据会保留，但pageId为undefined
3. 新创建的快照会自动包含pageId

### 处理旧数据

```typescript
// 查询没有pageId的旧快照
const legacySnapshots = await snapshotDb.snapshot
  .where('pageId')
  .equals(undefined)
  .toArray()

// 可以选择清理或迁移这些数据
```

## 注意事项

1. **页面ID命名**：建议使用有意义的页面ID，避免冲突
2. **快照数量限制**：每个页面独立计算快照数量（默认10个）
3. **内存使用**：每个页面的游标信息会保存在内存中
4. **清理策略**：删除页面时建议同时清理相关快照

## 故障排除

### 快照混乱
- 确保在页面加载时正确设置了页面ID
- 检查页面切换时是否调用了switchPage方法

### 撤销/重做不工作
- 验证当前页面ID是否正确设置
- 检查是否有该页面的快照数据

### 数据库升级失败
- 清空浏览器的IndexedDB数据
- 重新加载应用程序
