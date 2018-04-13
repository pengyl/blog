/**
 */
module.exports = {
  state: {
    menus: [],
    adminMenu: [
      {
        id: '00',
        title: '系统管理',
        path: '',
        icon: 'icon-settings',
        childrenMenu: [
          {
            id: '1',
            title: '字典管理',
            path: '/home/dictionary',
            icon: '',
            childrenMenu: []
          },
          {
            id: '2',
            title: '菜单管理',
            path: '/home/menuManage',
            icon: '',
            childrenMenu: []
          },
          {
            id: '3',
            title: '角色管理',
            path: '/home/roleManage',
            icon: '',
            childrenMenu: []
          },
          {
            id: '4',
            title: '组织管理',
            path: '/home/orgManage',
            icon: '',
            childrenMenu: []
          },
          {
            id: '5',
            title: '用户管理',
            path: '/home/userManage',
            icon: '',
            childrenMenu: []
          }
        ]
      }
    ]
  },
  mutations: {
    changeMenu (state, newMenu) {
      // 变更状态
      state.menus = newMenu.menus;
    },
    setMenu (newMenu) {
      this.state.menus = newMenu;
    }
  }
};
