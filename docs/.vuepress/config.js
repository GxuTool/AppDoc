import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',

  title: '西大工具箱-移动教务（暂名）',
  description: 'GXU 教务系统常用功能全适配，包括个人课表、考试信息、考试成绩等',

  theme: defaultTheme({
    logo: '/assets/ic_launcher.png',

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
  bundler: viteBundler(),
})
