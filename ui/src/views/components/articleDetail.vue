<template>
  <div>
    <el-row class="article_detail">
      <el-col :span="24" class="title">
        <span v-model="articleData.title" v-text="articleData.title"> </span>
      </el-col>
      <el-col :span="24" class="content">
        <div v-html="articleData.htmlContent"></div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {ElCol},
    props: {},
    data() {
      return {
        articleData: {}
      }
    },
    methods: {
      getSessionData(){
        return JSON.parse(sessionStorage.getItem("detail"));
      }
    },
    mounted() {
      this.articleData = this.getSessionData();
      console.log(JSON.stringify(this.articleData));
    }
  }
</script>

