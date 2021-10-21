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
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>导航一</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-location"></i>
                <!--文本-->
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>

  import {loginOut} from '@/api/user/user'

  export default {
    data(){
      return{
        // 左侧菜单数据
        menuList:[]
      }
    },
    created() {
      this.getMenuList()
    },
    methods: {
      async getMenuList() {
        const {data: res} = this.$http.get('menu');
        if (res.meta.status!==200)return this.$message.error(res.meta.message)
        this.menuList=res.data
        // console.log(res)
      },
      logout: function () {
        loginOut().then((res)=>{
          if (res.status===200) return this.$message.info(res.data)
        })
        window.sessionStorage.clear();
        this.$router.push('/')
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
</style>

