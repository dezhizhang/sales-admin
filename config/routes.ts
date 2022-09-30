/*
 * :file description: 
 * :name: /sales-admin/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-30 15:01:58
 * :last editor: 张德志
 * :date last edited: 2022-09-30 15:34:37
 */
export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path:'/user/list',
    name:'用户列表',
    icon: 'smile',
    component: '@/pages/user/list',
  },
  {
    name: '',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
