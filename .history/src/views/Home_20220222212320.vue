<template>
  <el-container class="home-container" style="height: 500px; border: 1px solid #eee">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="" alt="">
        <span>again</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <div class="line"></div>
    <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

    <el-menu :default-openeds="['1', '3']" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>name</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    
  </el-aside>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
  </el-container>
</template>
<script>

  // import {loginOut} from '@/api/user/user'
  // import {menu} from "@/api/user/menu";

  export default {
    formData:[],
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    items() {
      const item = {
        url:"www.baidu.com",
        name:"菜单",
        childItem : {
          url:"www.baidu.com",
          name:"菜单",
        }
      };
      return{
        formData:Array(3).fill(item)
      }
    },
   
  };

</script>


<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center; // 按钮居中
    color: #eeeeee;
    font-size: 20px;

    > div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
    }
  }
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-main {
    background-color: #eaedf1;
    padding: 10px;
  }


</style>

