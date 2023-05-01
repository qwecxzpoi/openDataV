import { ComponentGroup } from '@open-data-v/core'
import { BaseComponent } from '@open-data-v/core'
import { DataIntegrationMode } from '@open-data-v/core/data'

export const componentName = 'ComChart'
class ComChartComponent extends BaseComponent {
  constructor(id?: string, name?: string, icon?: string) {
    super({
      component: componentName,
      group: ComponentGroup.OTHER,
      name: name ? name : '通用Echart图',
      id,
      width: 500,
      height: 170,
      icon,
      dataIntegrationMode: DataIntegrationMode.UNIVERSAL
    })
  }
}

export default ComChartComponent
