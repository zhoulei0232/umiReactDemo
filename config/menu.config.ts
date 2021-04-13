export default [
  {
    title: 'Dashboard',
    link: '/dashboard',
    key: 'dashboard',
    icon: '',
    children: [],
  },
  {
    title: '产品管理',
    link: '/productManage',
    key: 'productManage',
    icon: '',
    children: [
      {
        title: '查询列表',
        link: '/productManage/productList',
        key: 'productList',
        icon: '',
        children: [],
      },
      {
        title: '添加商品',
        link: '/productManage/addNewProduct',
        key: 'addNewProduct',
        icon: '',
        isHidden: true,
        children: [],
      }
    ],
  },
  {
    title: '列表页',
    link: '/list',
    key: 'list',
    icon: '',
    children: [
      {
        title: '查询列表',
        link: '/list/queryTable',
        key: 'queryTable',
        icon: '',
        children: [],
      },
      {
        title: '测试表单',
        link: '/list/testDemo',
        key: 'testDemo',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '功能页',
    link: '/func',
    key: 'func',
    icon: '',
    children: [
      {
        title: '拖拽排序',
        link: '/func/draggable',
        key: 'draggable',
        icon: '',
        children: [],
      },
      {
        title: 'gg-editor',
        link: '/func/ggEditor',
        key: 'ggEditor',
        icon: '',
        children: [],
      },
      {
        title: 'antvX6',
        link: '/func/antvX6',
        key: 'antvX6',
        icon: '',
        children: [],
      },
    ],
  },
];
