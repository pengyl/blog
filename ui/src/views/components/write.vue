<template>
  <div>
    <el-row>
      <el-col :span="18" :xs="18" :sm="18" :gutter="20">
        <div><label>标题：</label>
          <el-input v-model="title" placeholder="请输入内容"></el-input></div>
      </el-col>

      <el-col :span="24">
        <mavon-editor ref="editor" @save="save" :value="value"></mavon-editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    props: {
      value: {
        type: String,
        require: false
      },
      title: {
        type: String,
        require: false
      }
    },
    data() {
      return {
        article: {
          content: "",
          htmlContent: "",
          title: ""
        }
      }
    },
    methods: {
      save(value, render) {
        console.log("value:", value);
        console.log("render:", render);
        let _this = this;
        this.article = {
          content: value,
          title: this.title,
          htmlContent: render
        };

        this.$http.post('article', this.article).then(response => {
          console.log(response);
          let data = response.data;
          if (response.status === 200 && data.status === 1) {
            // 转到 page 页面
            _this.$router.push({name: 'page'});
          } else {
            this.error.show = true;
            this.error.message = '帐号或密码错误'
          }
        });
      }
    }
  }
</script>
