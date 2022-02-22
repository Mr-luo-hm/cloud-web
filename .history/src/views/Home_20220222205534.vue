<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="" alt="">
        <span>again</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <div class="line"></div>
    
    <template>
      <el-table
        :data="menuList"
        style="width: 100%"
        height="250"
        border
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="id"
          label="日期"
          width="500">
        </el-table-column>
        <el-table-column
          prop="method"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </template>
  </el-container>
</template>
<script>

  import {loginOut} from '@/api/user/user'
  import {menu} from "@/api/user/menu";

  export default {
    data(){
      return{
        // 左侧菜单数据
        menuList:[],
        activeIndex: '1',
        list:[1,2,3,4],
        list2:["a","b","c","d"],
        beans:[]
      }
    },
    created() {
      this.getMenuList()
    },
    methods: {
      async getMenuList() {
        menu().then(res=>{
          if (res.status===200)
            this.menuList=res.data
        })
      },
      logout: function () {
        console.log("xxxxxxxxxxxxxxxxx")
        loginOut().then((res)=>{
          console.log(res)
          if (res.status===200) return this.$message.info(res.data)
        })
        window.sessionStorage.clear();
        this.$router.push('/')
      },
      handleSelect(env) {
        console.log(env);
      },
      tableRowClassName({row, rowIndex}) {
        console.log(row)
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
  }

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

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }

  .el-menu {
    border-right-width: 0;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

