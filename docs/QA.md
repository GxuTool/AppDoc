# 功能情景与常见问题

[//]: # (少的话可以先不分，如果多的话，也是按模块分页）)
## Q1：如何保证我的教务系统账号安全？

输入的账号和密码只通过缓存数据的方式，存储在APP内，不会泄露。我们也不会上传到云端服务器。

## Q2：为什么晚上11点后需要使用校园网？

教务系统设置如此。

若晚上11点后不使用校园网，将提示“出于网络安全角度考虑，针对校外网络的访问，本系统的开放时间仅为每天的7：30—23：00。其他时间如需访问，请通过广西大学的VPN系统进行访问。”

而APP暂不考虑支持VPN。

## Q3: 介绍评价功能的开发情况。

教务系统刻意把学生评价功能做得很差，添加了许多加密的混淆，致使APP在拿到相关数据后，需要做额外的解析，才能把数据转换为适于正常人阅读的形式。

其提交接口也写得诘诎聱牙，理解这两个信息传输部分，就占了开发全过程的一半时间。

提交评价功能正在紧锣密鼓优化中，未来还将上线应用“评价模板”等功能。只需制作（或套用现成）一份模板，即可对所有老师快速应用这一份评价模板。

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
