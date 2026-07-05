import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// ESM 模块获取 __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  title: '西大工具箱-移动教务（暂名）',
  description: 'GXU 教务系统常用功能全适配，包括个人课表、考试信息、考试成绩等',

  theme: defaultTheme({
    logo: '/ic_launcher.png', // publicDir 中的文件，构建后在 dist 根目录

    navbar: [
      { text: '首页', link: '/' },
      { text: '基础教程', link: '/guide/main.html' },
      { text: '工具使用', link: '/tools/' },
      { text: '软件设置', link: '/setting/appSet.html' },
      { text: '常见问题', link: '/QA.html' },
      { text: '声明', link: '/statement.html' },
      { text: '版本日志', link: '/logs.html' },
    ],

    sidebar: [
      { text: '基础教程', link: '/guide/main.html' },
      {
        text: '工具箱',
        collapsible: true,
        children: [
          { text: '课程信息', link: '/tools/classInfo.html' },
          { text: '考试信息', link: '/tools/examInfo.html' },
          { text: '通知信息', link: '/tools/noticeInfo.html' },
          { text: '其他信息', link: '/tools/otherInfo.html' },
          {text: '其他工具', link: '/tools/otherTools.html'}
        ],
      },
      { text: '软件设置', link: '/setting/appSet.html' },
      { text: '常见问题', link: '/QA.html' },
      {text:'联系我们',link:'/contact.html'},
      { text: '声明', link: '/statement.html' },
      { text: '版本日志', link: '/logs.html' },
    ],
  }),
  plugins: [
    markdownHintPlugin({
      hint: true,
      alert: true,
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      // publicDir 中的文件会原样复制到 dist 根目录，供绝对路径引用
      // VuePress 主题配置（如 logo）只接受绝对路径，无法通过 Vite 处理相对路径
      publicDir: path.resolve(__dirname, '../assets'),
    },
  }),
})
