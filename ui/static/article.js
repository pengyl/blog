module.exports = {
  state: {
    article: [],
    adminArticle: [
      {title: "Java 工程师成神之路",updateTime:"2018-03-24",content:"Java 工程师成神之路"},
      {title: "Spring 中获取 request 的几种方法，及其线程安全性分析",updateTime:"2018-03-21",content:"Java 工程师成神之路"},
      {title: "使用Intellij中的Spring Initializr来快速构建Spring Boot/Cloud工程",updateTime:"2018-03-20",content:"Java 工程师成神之路"},
      {title: "Java 后端工程师学习大纲",updateTime:"2018-03-02",content:"Java 工程师成神之路"},
      {title: "近5年133个Java面试问题列表",updateTime:"2018-02-14",content:"Java 工程师成神之路"},
      {title: "微信红包的随机算法是怎样实现的？",updateTime:"2018-01-24",content:"Java 工程师成神之路"},
      {title: "GitHub 上那些值得一试的 Java 开源库",updateTime:"2018-01-23",content:"Java 工程师成神之路"},
      {title: "RabbitMQ 入门教程",updateTime:"2018-01-22",content:"Java 工程师成神之路"},
      {title: "后端开发人员的路线图 2018 版？",updateTime:"2017-11-10",content:"Java 工程师成神之路"},
      {title: "Vue 中需要注意的问题总结（下）",updateTime:"2017-04-07",content:"Java 工程师成神之路"},
      {title: "Vue 中需要注意的问题总结（上）",updateTime:"2017-03-12",content:"Java 工程师成神之路"},
      {title: "Spring Boot + Spring Cloud 干货汇总",updateTime:"2017-02-22",content:"Java 工程师成神之路"},
      {title: "TCP/IP 必知必会的十个问题",updateTime:"2017-01-22",content:"Java 工程师成神之路"}
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
