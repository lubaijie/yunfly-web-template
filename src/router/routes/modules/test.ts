import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

export default {
  layout: {
    path: '/test',
    name: 'Test',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/test/page-a',
    meta: {
      icon: 'ant-design:home-outlined',
      title: '菜单',
    },
  },

  routes: [
    {
      path: '/page-a',
      name: 'PageA',
      component: () => import('/@/views/biz/test/TestPageA.vue'),
      meta: {
        title: '菜单1',
      },
    },
    {
      path: '/page-b',
      name: 'PageB',
      component: () => import('/@/views/biz/test/TestPageB.vue'),
      meta: {
        title: '菜单2',
      },
    },
    {
      path: '/test1',
      name: 'Test1',
      component: () => import('/@/views/biz/test/Test1'),
      meta: {
        title: '测试1',
      },
    },
    {
      path: '/test2',
      name: 'Test2',
      component: () => import('/@/views/biz/test/Test2'),
      meta: {
        title: '测试2',
      },
    },
  ],
} as AppRouteModule;
