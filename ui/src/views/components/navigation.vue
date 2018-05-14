<template>
  <div class="navigation background">
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="vertical"
              @select="handleSelect" v-for="(item , index) in navigation" :key="item.id">
      <el-menu-item :index="item.id" v-text="item.title" @click="click(item)"></el-menu-item>
    </el-menu>
    <!--<div class="name" v-for="item in navigation">-->
      <!--<a v-model="item.title" v-text="item.title" @click="click(item)"></a>-->
    </div>
  <!--</div>-->
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        navigation: this.$navigation.adminNavigation,
        activeIndex:"1"
      }
    },
    methods:{
      click(item){
        this.$NOTIFY(item.title);
      },
      handleSelect(tab,event){
        console.log(tab, event);
        this.activeIndex = tab;
      }
    }
  }

</script>
<style scoped>
</style>
