import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  layout: {
    path: '/system',
    name: 'System',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/system/data/datatables',
    meta: {
      icon: 'ant-design:setting-outlined',
      title: '系统',
    },
  },

  routes: [
    {
      path: '/data',
      name: 'Data',
      redirect: '/system/data/datatables',
      meta: {
        title: '数据',
      },
      children: [
        {
          path: 'datatables',
          name: 'DataTables',
          component: () => import('../../../views/system/data/tables/DataTables'),
          meta: { title: '数据表' },
        },
      ],
    },
  ],
};

export default dashboard;
