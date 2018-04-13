<template>
  <div>

    <el-container style=" border: 1px solid #eee">
      <!-- 头部-->
      <el-header>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column prop="lastUpdateTime" label="时间" width="180">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      const item = {
        lastUpdateTime: '2016-05-02',
        title: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: []
      }
    },
    methods: {
      getArticle() {
        let _this = this;
        console.log("这里！！");
        this.$http.get('/article').then(response => {
          _this.tableData = response.data.result;
          console.log("这里！！");

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
<style type="text/css">
  html {
    margin: 0;
    background-color: #E9EEF3;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    margin: 0;
    font-size: 12px;
    text-align: right;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgb(238, 241, 246);
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 180px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 2rem;

  }

  body > .el-container {
    margin: 0;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
