<template>
  <div id="app">
    <router-view style="height: 85%"/>
  </div>
</template>

<script>
  import myHeader from "./views/components/header.vue"
  import navigation from "./views/components/navigation.vue"
export default {
  name: 'App',
  components: {
    'my-header':myHeader,
    "navigation":navigation
  },
  data(){
    return{

    }
  }
}
</script>

<style>


</style>
