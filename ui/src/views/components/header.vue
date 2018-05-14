<template>
  <div class="header background" >
    <img src="../../assets/icon.jpeg"/>
    <div class="name">来日方长</div>
     <my-menu></my-menu>
    <div class="button">
   <el-button  type="primary"@click="jump()">写文章</el-button></div>
  </div>

</template>
<script>
  import myMenu from "./menu.vue"
  export default {
    components: {
      'my-menu':myMenu
    },
    data(){
      return{

      }
    },
    methods:{
      jump(){
        this.$router.push({name: "write"});
      }
    }
  }

</script>
