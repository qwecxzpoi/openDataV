/**
 * @description
 * @description 创建时间 2023:05:01 16:00:47
 * @desc [参考 vbenjs componentMap.ts]{@link https://github.com/vbenjs/vue-vben-admin/blob/main/src/components/Form/src/componentMap.ts}
 */

// region 组件信息
import {
  BorderBox1,
  BorderBox2,
  BorderBox3,
  BorderBox4,
  BorderBox5,
  BorderBox6,
  BorderBox7,
  BorderImage
} from '@open-data-v/border-box'
import { Decoration1, Decoration2, Decoration3, Decoration4 } from '@open-data-v/decoration'
import { Gauge1 } from '@open-data-v/gauge'
import OpenDataVImage from '@open-data-v/image'
import OpenDataVProgress from '@open-data-v/progress'
import OpenDataVScrollRank from '@open-data-v/scrollrank'
import { ScrollTable } from '@open-data-v/scrolltable'
import OpenDataVTabs from '@open-data-v/tabs'
import { DateText, StaticText, SubText } from '@open-data-v/text'
import { FlvVideo } from '@open-data-v/video'
import {
  BasicBarChart,
  StereoscopicLineChart,
  ComChart,
  BasicLineChart,
  MapChart,
  BasicPieChart,
  WaveChart
} from '@open-data-v/echarts'
// endregion
const componentMap = new Map<string, any>()
componentMap.set(BorderBox1.componentName, BorderBox1)
componentMap.set(BorderBox2.componentName, BorderBox2)
componentMap.set(BorderBox3.componentName, BorderBox3)
componentMap.set(BorderBox4.componentName, BorderBox4)
componentMap.set(BorderBox5.componentName, BorderBox5)
componentMap.set(BorderBox6.componentName, BorderBox6)
componentMap.set(BorderBox7.componentName, BorderBox7)
componentMap.set(BorderImage.componentName, BorderImage)
componentMap.set(Decoration1.componentName, Decoration1)
componentMap.set(Decoration2.componentName, Decoration2)
componentMap.set(Decoration3.componentName, Decoration3)
componentMap.set(Decoration4.componentName, Decoration4)
componentMap.set(Gauge1.componentName, Gauge1)
componentMap.set(OpenDataVImage.componentName, OpenDataVImage)
componentMap.set(OpenDataVProgress.componentName, OpenDataVProgress)
componentMap.set(OpenDataVScrollRank.componentName, OpenDataVScrollRank)
componentMap.set(ScrollTable.componentName, ScrollTable)
componentMap.set(OpenDataVTabs.componentName, OpenDataVTabs)
componentMap.set(DateText.componentName, DateText)
componentMap.set(StaticText.componentName, StaticText)
componentMap.set(SubText.componentName, SubText)
componentMap.set(FlvVideo.componentName, FlvVideo)
componentMap.set(BasicBarChart.componentName, BasicBarChart)
componentMap.set(StereoscopicLineChart.componentName, StereoscopicLineChart)
componentMap.set(ComChart.componentName, ComChart)
componentMap.set(BasicLineChart.componentName, BasicLineChart)
componentMap.set(MapChart.componentName, MapChart)
componentMap.set(BasicPieChart.componentName, BasicPieChart)
componentMap.set(WaveChart.componentName, WaveChart)

export function add(compName: string, component: Promise<any>) {
  componentMap.set(compName, component)
}

export function del(compName: string) {
  componentMap.delete(compName)
}

export { componentMap }
