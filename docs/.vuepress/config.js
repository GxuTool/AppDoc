import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',

  title: '西大工具箱-移动教务（暂名）',
  description: 'GXU 教务系统常用功能全适配，包括个人课表、考试信息、考试成绩等',

  theme: defaultTheme({
    logo: 'https://gitlab.unde.site/uploads/-/system/appearance/logo/1/DE36B41263F10D046C9449C45B69DF67.png',

    navbar: [
      { text: '首页', link: '/' },
      { text: '基础教程', link: '/guide/main.html' },
      { text: '工具使用', link: '/tools/toolUse.html' },
      { text: '软件设置', link: '/settings/appSet.html' },
      { text: '常见问题', link: '/QA.html' },
      { text: '声明', link: '/statement.html' },
      { text: '版本日志', link: '/logs.html' },
    ],

    sidebar: [
        {text:'基础教程',link:'/guide/main.html',},
      {
        text:'工具箱',
        collapsible:true,
        children:[
          {text:'信息查询',link:'/tools/message.md'},
          {text:'实践课',link:'/tools/act.md'},
          //{text:'通知',link:'/tools/notice.md'},
          {text:'其他',link:'/tools/other.md'},

        ]
      },
      {text:'软件设置',link:'/settings/appSet.html'},
      {text:'常见问题',link:'/QA.html'},
      {text:'声明', link:'/statement.html'},
      {text:'版本日志',link:'/logs.html'},


    ],
  }),

  bundler: viteBundler(),
})