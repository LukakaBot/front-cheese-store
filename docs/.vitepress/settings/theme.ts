import { DefaultTheme } from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
  logo: { src: '/logo.svg', width: 24, height: 24 },
  /* 上次更新的文本和日期格式 */
  lastUpdated: {
    text: '最后更新：',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'short'
    }
  },
  search: {
    provider: 'local'
  },
  /* 导航栏 */
  nav: renderNavbar(),
  /* 侧边栏 */
  sidebar: {
    '/interview/': { base: '/interview', items: renderInterviewSidebar() },
    '/components/': { base: '/components', items: renderComponentsSidebar() },
  },
  /* 社交链接 */
  socialLinks: [
    { icon: 'github', link: 'https://github.com/monishine/front-cheese-store' }
  ],
  /* 页脚 */
  footer: {
    message: '如有转载或 CV 的请标注本站原文地址',
    copyright: 'Copyright © 2019-present Moni',
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  }
};

// 渲染导航栏
function renderNavbar(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/'
    },
    {
      text: '面筋',
      link: '/interview/vue/v-model的作用',
    },
    {
      text: '组件',
      link: '/components/button'
    }
  ];
};

// 渲染面经侧边栏
function renderInterviewSidebar(): DefaultTheme.SidebarItem[] {
  return [{
    text: 'Vue',
    collapsed: true,
    items: [
      { text: 'v-model的作用', link: '/vue/v-model的作用' },
      { text: 'v-model的实现原理', link: '/vue/v-model的实现原理' },
      { text: 'vue2数据双向绑定的缺陷', link: '/vue/vue2数据双向绑定的缺陷' },
      { text: 'vue3实现数据双向绑定的方法', link: '/vue/vue3实现数据双向绑定的方法' },
      { text: '路由懒加载', link: '/vue/路由懒加载' }
    ]
  }];
};

// 渲染组件侧边栏
function renderComponentsSidebar(): DefaultTheme.SidebarItem[] {
  return [{
    text: '基础',
    collapsed: true,
    items: [
      { text: '按钮', link: '/button' },
      { text: '图标', link: '/icon' }
    ]
  }];
};