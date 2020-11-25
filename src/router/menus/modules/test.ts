import type { MenuModule } from '/@/router/types.d';
const menu: MenuModule = {
  orderNo: 20,
  menu: {
    name: '菜单',
    path: '/test',
    children: [
      {
        path: '/page-a',
        name: '菜单1',
      },
      {
        path: '/page-b',
        name: '菜单2',
      },
      {
        path: 'test1',
        name: '测试1',
      },
      {
        path: 'test2',
        name: '测试2',
      },
    ],
  },
};
export default menu;
