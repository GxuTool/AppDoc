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

文档正文主要位于 [docs/](cci:9://file:///D:/Android/toolDoc/docs:0:0-0:0) 目录。

常用文件说明：

* [docs/README.md](cci:7://file:///D:/Android/toolDoc/docs/README.md:0:0-0:0): 文档网站首页。
* [docs/guide/](cci:9://file:///D:/Android/toolDoc/docs/guide:0:0-0:0): 基础教程。
* [docs/tools/](cci:9://file:///D:/Android/toolDoc/docs/tools:0:0-0:0): 工具使用说明。
* [docs/settings/](cci:9://file:///D:/Android/toolDoc/docs/settings:0:0-0:0): 软件设置说明。
* [docs/QA.md](cci:7://file:///D:/Android/toolDoc/docs/QA.md:0:0-0:0): 常见问题。
* [docs/statement.md](cci:7://file:///D:/Android/toolDoc/docs/statement.md:0:0-0:0): 声明。
* [docs/logs.md](cci:7://file:///D:/Android/toolDoc/docs/logs.md:0:0-0:0): 版本日志。
* `docs/asset/`: 文档图片资源。
* [docs/.vuepress/config.js](cci:7://file:///D:/Android/toolDoc/docs/.vuepress/config.js:0:0-0:0): VuePress 配置文件。

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
    { text: '信息查询', link: '/tools/message.html' },
    { text: '实践课', link: '/tools/act.html' },
    { text: '其他', link: '/tools/other.html' },
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