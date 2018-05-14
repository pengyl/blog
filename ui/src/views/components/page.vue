<template>
  <div style="height:100%">
      <div class="main-page">
        <my-article :article-data="tableData"></my-article>
        <router-view />
      </div>
    </div>
</template>
<script>
  import myArticle from "./article.vue"
  import myHeader from "./header.vue"

  export default {
    components: {
      'my-article': myArticle,
      'my-header': myHeader
    },
    data() {
      return {
//        tableData: this.$article.adminArticle,
        tableData: []
      }
    },
    methods: {
      getArticle() {
        let _this = this;
        this.$http.get('/article').then(response => {
          _this.tableData = response.data.result;
        }, res => {
        });
      }
    },
    mounted() {
      // 获取所有的文章
      this.getArticle();
    }
  };
</script>
<style type="text/css" scoped>
</style>
