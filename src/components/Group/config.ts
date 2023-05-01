import { ComponentGroup } from '@open-data-v/core'
import { BaseComponent } from '@open-data-v/core'

console.log(BaseComponent)
export const componentName = 'Group'
class GroupComponent extends BaseComponent {
  show = false
  constructor(id?: string, name?: string) {
    super({
      component: componentName,
      group: ComponentGroup.CONTAINER,
      name: name ? name : '分组',
      id,
      width: 200,
      height: 200
    })
  }
}

export default GroupComponent
