<template>
  <div>
    <div class="menu">
      <el-menu :default-active="activeIndex" mode="horizontal"
               @select="handleSelect" v-for="(item , index) in menus" :key="item.id">
        <el-menu-item :index="item.id" v-text="item.title"></el-menu-item>
      </el-menu>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: this.$menu.adminMenu,
        activeIndex: "1"
      }
    },
    methods: {
      onClick(name) {
        this.$NOTIFY(name);
      },
      handleSelect(tab, event) {
        console.log(tab, event);
        this.activeIndex = tab;
        if (tab == 1) {
          // 暂时先固定 ,后续可改成配置的
          this.$router.push({name: "page"});
        }

      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .menu {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /*margin: 0 0 0 15px;*/
  }

  p {
    padding-left: 20px;
    width: auto;
    margin: 0;
  }

</style>
