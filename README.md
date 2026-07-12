# 西大工具箱文档仓库

本仓库用于维护西大工具箱 / GXU Tool App 的使用文档，文档基于 VuePress 构建。

## 常用文档

- [仓库地址](https://github.com/GxuTool/AppDoc)
- [MarkDown教程](https://markdown.com.cn/basic-syntax/)
- [VitePress文档（大致看看，看完基础，其他的写的时候看看）](https://vitepress.dev/zh/guide/getting-started#up-and-running)

## Getting Started

> **Note**: 请先确保本地已经安装 Node.js LTS版本 和 npm。

### Step 1: 安装依赖

在项目根目录执行：

```sh
npm install
```

### Step 2: 本地预览

在项目根目录执行：

```sh
npm run docs:dev
```

启动成功后，根据终端提示打开本地地址即可预览文档。

如果修改配置后页面没有刷新，可以执行：

```sh
npm run docs:clean-dev
```

### Step 3: 构建文档

```sh
npm run docs:build
```

## 文档修改说明

文档正文主要位于 `docs/` 目录。

常用文件说明：

* `docs/README.md`: 文档网站首页。
* `docs/guide/main.md`: 基础教程（登录、首页、工具箱概览、个性化设置）。
* `docs/tools/classInfo.md`: 课程信息（课表查询、导出课表、GPA 计算器、选课信息等）。
* `docs/tools/examInfo.md`: 考试信息（考试考场查询、考试成绩查询）。
* `docs/tools/noticeInfo.md`: 通知信息（调课信息、调休信息、法定节假日）。
* `docs/tools/otherInfo.md`: 其他信息（考勤信息查询、教师信息查询）。
* `docs/tools/evaluation.md`: 教学评价（期末学生评价、一键评价）。
* `docs/tools/otherTools.md`: 其他工具（学校文件、地图导航、教学楼平面图、全校实时课表）。
* `docs/setting/appSet.md`: 软件设置（账号管理、主题设置、软件信息）。
* `docs/QA.md`: 常见问题。
* `docs/contact.md`: 联系我们。
* `docs/statement.md`: 声明与免责声明。
* `docs/development/roadmap.md`: 开发计划与已知问题。
* `docs/logs.md`: 版本日志。
* `docs/asset/`: 文档图片资源。
* `docs/.vuepress/config.js`: VuePress 配置文件。

## 简单写作规范

编写文档时建议遵循以下规范：

* 每个页面尽量只使用一个一级标题 `#`。
* 二级标题 `##` 主要用于一级标题下的子模块。
* 当层级较多时才使用三级标题 `###`和四级标题`####` 。
* 写文档的时候注意多换行，方便维护。
* 难以用文字描述的功能建议图文并茂
* 注意事项等较重要的部分可以使用[引用块](https://vitepress.dev/zh/guide/markdown#custom-containers)。
* 文件名建议使用小写英文和短横线。
* 图片文件名建议使用英文，避免空格和特殊符号。
* 涉及考试、成绩、选课、考勤等重要信息时，应提醒用户以学校官方系统为准。
* 涉及开发者责任的内容应保持谨慎，避免过度承诺。


## 图片引用规范

文档图片建议暂时先统一放在：

```text
docs/assets
```
尽量转换成webp，图标或者其他较小的图片可以不用转换，以后可能会放在服务器上


例如当前 Markdown 文件位于：

```text
docs/tools/message.md
```

图片位于：

```text
docs/asset/onlineClass.webp
```

可以这样引用，采用HTML的方式，控制图片的大小

```html
<img src="../asset/onlineClass.webp" alt="校选课查漏示意图" width="250" />
```

## 侧边栏配置

如果新增页面后需要显示在侧边栏，需要修改：

```text
docs/.vuepress/config.js
```

示例：

```js
{
  text: '工具箱',
  collapsible: true,
  children: [
    { text: '课程信息', link: '/tools/classInfo.html' },
    { text: '考试信息', link: '/tools/examInfo.html' },
    { text: '通知信息', link: '/tools/noticeInfo.html' },
    { text: '其他信息', link: '/tools/otherInfo.html' },
    { text: '教学评价', link: '/tools/evaluation.html' },
    { text: '其他工具', link: '/tools/otherTools.html' },
  ],
}
```

## 提交信息规范

提交信息建议简洁明确。

常见类型：

* `docs`: 文档内容的增、删、改。
* `fix`:  修复bug。
* `feat`: 新增功能。
* `refactor`: 结构调整和重构之类。
* `chore`: 配置、依赖或杂项调整。

不会的话可以上仓库看看历史提交记录

## 注意事项

* 对自己的修改不够自信的可以自己拉一个分支提交
* 图片资源应尽量压缩，避免体积过大，格式尽量使用 `webp` 格式，[压缩网站](https://squoosh.app/)。
