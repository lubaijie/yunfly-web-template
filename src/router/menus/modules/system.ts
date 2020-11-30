import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: '系统',
    path: '/system',

    children: [
      {
        path: 'data',
        name: '数据',
        children: [
          {
            path: 'datatables',
            name: '数据表',
          },
        ],
      },
    ],
  },
};

export default menu;
