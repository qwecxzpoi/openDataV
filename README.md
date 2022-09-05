![](./public/logo.png)


![](https://img.shields.io/github/license/AnsGoo/openDataV)
![](https://img.shields.io/github/stars/AnsGoo/openDataV)
![](https://img.shields.io/github/issues/AnsGoo/openDataV)
![](https://img.shields.io/github/forks/AnsGoo/openDataV)

# 简介
  🎃OpenDataV 是一个`拖拽式`、`可视化`、`低代码`数据可视化🎉开发平台，你可以用它自由的拼接成各种✨炫酷的大屏，同时支持用户方便的开发自己的组件并接入平台。

# 体验
🧙国外：[http://datav.byteportrait.com/](http://datav.byteportrait.com/)

🧙国内：[http://small_bud_star.gitee.io/datav](http://small_bud_star.gitee.io/datav)

目前仅开源前端部分，采用mock方式提供数据，目前项目正在完善中。

### 🎛️ 布局页
![](screenshot/1.jpg)

### 🤿 编辑页
 ![](screenshot/2.jpg)

# 功能
- 🎊 编辑器页面基本功能完成，包括编辑、预览、导入、导出、保存
- 🪄 图层的置顶、置底、上下移动、显示、隐藏、复制、剪切、粘贴
- 🖼️ 组件的缩放、旋转、拖动、复制、粘贴、组合、拆分、移除、自动对齐
- 🔮 支持用户操作记录的恢复、撤销功能
- 🧶 支持用户自定义组件
- 📔 支持组件的用户自定组件配置项

# 技术点
本项目采用`Vue3` + `vite` + `TypeScript`开发，界面库使用`NaiveUI`，使用面向对象方式封装了路由、请求、存储，组件采用自动扫描注册、异步加载，提升渲染速度；使用IndexDB存储快照数据，减少快照数据内存占用，加快访问速度；组件独立依赖，解耦了组件和基础框架的依赖库，方便后续独立开发组件。

目前仅开发了部分组件，后续还会继续完善。

### ⌛计划功能
- [ ] 组件动态、静态数据请求
- [ ] 数据过滤处理（JS、Python）
- [ ] 项目发布
- [ ] 接口管理
- [ ] 算法管理

# 开发环境
| 名称 | 版本    |
| ---- | ------- |
| node | 16.14.x |
| pnpm | 7.9.3   |
| vue  | 3.2.20  |

🚥目前仅在`Chrome`和`Microsoft Edge`最新版浏览器测试过，其他浏览器未测试

# 启动项目

```shell
# 安装依赖
pnpm install -r

# 运行项目
pnpm dev

# 打包项目
pnpm build
```

**注：商业合作和技术交流，请添加我的微信**
![](/screenshot/20220831173216.jpg)