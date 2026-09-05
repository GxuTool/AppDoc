# 版本日志

## 公测

### v1.1.0:
- feat：自动刷新Token
- refactor：重构请求相关代码，使用async写法重写
- pref：优化弹窗体验，优化课表翻页（一点点），优化页面切换效果
- fix：分页信息不正确
（ps：旧版本升级可能会导致无法请求，可以尝试清空数据）
- feat: APP → 账号 → 教务账号设置，根据提示输入自己在教务系统上设置的账号和密码，并点击获取。

### v1.2.0:
#### feat:
- 新增班级课表查询工具
- 课程新增调课标志，课程详情增加考核方式
- 课程元素信息支持切换是否显示
- 支持选择课表起始日期
- 课程元素支持自定义高度
- 滑动条支持点击输入
- 日程表支持显示考试
- 课程详情和考试详情增加复制JSON按钮
#### fix:
- 修复滑动条高亮部分偏移问题
- 主题切换时选择器字体颜色错误
- 删除导航栏和卡片背景的半透明矩形
#### pref：
- 删除考试查询工具页的标题
- 优化班级课表查询参数显示逻辑和弹窗提示

## 内测

### v1.3.0:
#### feat:
- 课程元素信息支持切换是否显示
- 支持选择课表起始日期
- 课程元素支持自定义高度
- 滑动条支持点击输入
#### fix:
- 修复滑动条高亮部分偏移问题

### v1.3.2 beta：
#### fix：
  - 频繁刷新渲染引起的卡顿
  - 主题切换时选择器字体颜色错误
  - 删除导航栏和卡片背景的半透明矩形
 #### pref：
  - 优化班级课表查询参数显示逻辑和弹窗提示
  - 优化课表时间段在高度低于40时的显示

### v1.3.3 beta：
#### feat：
- 日程表支持显示考试
- 课程详情和考试详情增加复制JSON按钮
#### fix:
- 修复课表缩小后第13节课高度错误
#### pref：
- 班级课表预览隐藏日期

### v1.3.4 logs:
- 优化部分请求，修复考试成绩查询提示错误






[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
