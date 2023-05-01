import { componentList } from '@/designer/load'
import type { ComponentDataType } from '@/types/component'
import type { BaseComponent } from './component'
import type { RestRequestOptions, StaticRequestOptions } from './data'
import { DataIntegrationMode, DataType } from './data'

export function createComponent(comp: ComponentDataType): any {
  if ((comp.component as string) in componentList) {
    const _class = componentList[comp.component as string]
    const obj: BaseComponent = new _class(comp.id, comp.name, comp.icon)
    obj.groupStyle = comp.groupStyle
    obj.setPropValue(comp)
    obj.setStyleValue(comp)
    obj.dataIntegrationMode = comp.dataIntegrationMode || DataIntegrationMode.SELF
    const data = comp.data

    if (obj.dataIntegrationMode === DataIntegrationMode.UNIVERSAL) {
      switch (data?.type) {
        case DataType.STATIC:
          {
            const options = data.requestOptions as StaticRequestOptions
            obj.changeRequestDataConfig(DataType.STATIC, {
              id: options.dataId,
              script: options.script
            })
          }
          break
        case DataType.REST:
          {
            const options = data.requestOptions as RestRequestOptions
            obj.changeRequestDataConfig(DataType.REST, {
              options: options.restOptions,
              otherConfig: data.otherConfig
            })
          }
          break
        default:
          obj.loadDemoData()
      }
    }

    comp.subComponents?.forEach((item) => {
      const subObj = createComponent(item)
      subObj.parent = obj
      obj.subComponents.push(subObj)
    })
    return obj
  }
}

export function getComponentIndexById(id: string, parent: BaseComponent) {
  return parent.subComponents.findIndex((item) => item.id === id)
}
