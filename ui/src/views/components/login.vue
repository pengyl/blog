<template>
  <div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <el-form-item label="登录名:" prop="loginName">
            <el-input v-model="loginForm.loginName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <el-form-item label="密码:" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-button type="submit" @click="submitForm('loginForm')">登录</el-button>
        <label v-model="error.massage" v-if="error.show" v-text="error.message" style="color: red"> </label>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'login',
    data() {
      return {
        loginForm: {
          loginName: '',
          password: ''
        },
        rules: {
          loginName: [
            {required: true, message: '请输入登录名称', trigger: 'blur'},
            {min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur'}
          ],
          password: [{required: true, message: '请输入密码', trigger: 'blur'},
            {min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur'}
          ]
        },
        error: {
          massage: '',
          show: false
        }
      }
    },
    methods: {
      submitForm(formName) {
        let _this = this;
        this.error.show = false;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('login/check', this.loginForm).then(response => {
              console.log(response);
              let data = response.data;
              if (response.status === 200 && data.status === 1) {
                _this.$router.push({name: 'main', param: {data: data.result}});
              } else {
                this.error.show = true;
                this.error.message = '帐号或密码错误'
              }
            });
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-form {
    margin-top: 200px;
  }
</style>
