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

    <el-menu unique-opened router :default-active="$route.path"
      class="left-menu">
      <component class="menu-item" v-for="(value) in formData" :key="value.title+value.url"
      :index="value.url" :is="(value.children&&value.children.length>0)?'el-submenu':'el-menu-item'">
        <template slot="title">
          <i :class="[value.icon]"></i>
          <span>{{value.title}}</span>
        </template>
        <template v-if="value.children&&value.children.length>0">
          <el-menu-item class="menu-item" v-for="(v,i) in value.children" :key="v.url+i" :index="v.url">
            <i :class="[v.icon]"></i>
            <span slot="title">{{v.title}}</span>
          </el-menu-item>
        </template>
      </component>
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
    formData(){
    return {
      leftMenu:{
        isCollapse: false,
        navList: [{
          icon: 'el-icon-document',
          title: '订单管理',
          url: '/OrderManage'
        },{
          icon: 'el-icon-dish',
          title: '菜单管理',
          url: '/ProductManage'
        },{
          icon: 'el-icon-suitcase',
          title: '店铺管理',
          url: 'suibianxie',
          children: [{
            icon: 'el-icon-tickets',
            title: '店铺资料',
            url: '/StoreProfile'
          },{
            icon: 'el-icon-picture-outline',
            title: '轮播图管理',
            url: '/BannerPicture'
          },{
            icon: 'el-icon-s-grid',
            title: '桌台管理',
            url: '/TableManage'
          }]
        },{
          icon: 'el-icon-setting',
          title: '账号管理',
          url: '/AccountManage'
        },{
          icon: 'el-icon-user',
          title: '个人资料',
          url: '/PersonProfile'
        }]
      }
    }
  }
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

