import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'
import Group from '@/components/Group'
import type { BaseComponent } from '@open-data-v/core'
import { componentMap } from '@/designer/componentMap'

// 编辑器左侧组件列表
const componentList: Record<string, any> = {}

const AsyncComponent = {
  install: (app: App) => {
    // 注册Group组件
    componentList[Group.componentName] = Group.config
    const AsyncComp = defineAsyncComponent(Group.component)
    app.component(Group.componentName, AsyncComp)

    const moduleFilesTs: any = componentMap
    console.log(moduleFilesTs)
    Object.keys(moduleFilesTs).forEach((key: string) => {
      const componentOptions = moduleFilesTs[key]?.default

      if (componentOptions) {
        componentList[componentOptions.componentName] = componentOptions.config as BaseComponent

        // 注册异步组件
        const asyncComp = defineAsyncComponent(componentOptions.component)
        app.component(componentOptions.componentName, asyncComp)
      } else {
        console.error(`${key} is not a valid component`)
      }
    })
  }
}

export { componentList, AsyncComponent }
