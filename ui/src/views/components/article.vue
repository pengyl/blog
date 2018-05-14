<template>
  <div>
    <div class="article" v-for="item in articleData">
      <a v-model="item.title" v-text="item.title" @click="click(item)"></a>
      <label v-model="item.lastUpdateTime" v-text="item.lastUpdateTime"></label>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      articleData: {
        type: Array,
        require: true
      }
    },
    data() {
      return {}
    },
    methods: {
      click(item) {
        sessionStorage.setItem("detail", JSON.stringify(item));
        this.$router.push({name: 'detail'});
      }
    }
  }
</script>
