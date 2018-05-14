module.exports = {
  state: {
    navigation: [],
    adminNavigation: [
      {
        id: '1',
        title: 'JAVA技术',
        icon: ''
      },
      {
        id: '2',
        title: '版本管理',
        icon: '',
      },
      {
        id: '3',
        title: '框架',
        icon: '',
      },
      {
        id: '4',
        title: '前端',
        icon: '',
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
