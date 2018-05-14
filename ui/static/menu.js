module.exports = {
  state: {
    menus: [],
    adminMenu: [
      {
        id: '1',
        title: '技术博文',
        path: '/home/dictionary',
        icon: ''
      },
      {
        id: '2',
        title: '想法',
        path: '/home/thinking',
        icon: '',
        childrenMenu: []
      },
      {
        id: '3',
        title: '链接',
        path: '/home/link',
        icon: '',
        childrenMenu: []
      },
      {
        id: '4',
        title: '关于',
        path: '/home/about',
        icon: '',
        childrenMenu: []
      }
    ]
  },
  mutations: {
    changeMenu(state, newMenu) {
      // 变更状态
      state.menus = newMenu.menus;
    },
    setMenu(newMenu) {
      this.state.menus = newMenu;
    }
  }
};
