<template>
  <div>
    <my-header></my-header>
    <navigation></navigation>
    <router-view class="main background" style="height: 85%"/>
  </div>
</template>
<script>
  import myHeader from "./header.vue"
  import navigation from "./navigation.vue"
  export default {
    components: {
      'my-header':myHeader,
      "navigation":navigation
    },
    data() {
        return {}
    },
    methods: {

    },
    mounted() {

    }
  };
</script>
<style type="text/css" scoped>
</style>
