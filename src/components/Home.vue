<template>
  <el-container class="home">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边区域 -->
      <el-aside :width="width">
        <div class="toggle-button" @click="toggleCollapse">
          |||
        </div>
        <el-menu
          :collapse-transition="false"
          :collapse="isCollapse"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409FFF"
          :unique-opened="true"
          :router="true"
          :default-active="actionPath"
          >
          <!-- 一级菜单 -->
          <el-submenu :index="menu.id + ''" v-for="menu in menus" :key="menu.id">
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[menu.id]"></i>
              <!-- 文本 -->
              <span>{{menu.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item @click="saveNavState('/' + subMenu.path)" :index="'/' + subMenu.path" v-for="subMenu in menu.children" :key="subMenu.id">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subMenu.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data: () => ({
    menus: [],
    iconObj: {
      '125': 'iconfont icon-user',
      '103': 'iconfont icon-tijikongjian',
      '101': 'iconfont icon-shangpin',
      '102': 'iconfont icon-danju',
      '145': 'iconfont icon-baobiao'
    },
    isCollapse: false,
    actionPath: ''
  }),
  created() {
    this.getMenus()
    this.actionPath = sessionStorage.getItem('actionPath')
  },
  methods: {
    logout () {
      sessionStorage.clear()
      this.$router.push('/login')
      this.$message({
        message: '退出成功',
        type: 'success',
        duration: 1000
      })
    },
    async getMenus() {
      const { data: { data, meta } } = await this.$http.get('menus')
      if (meta.status !== 200) return this.$message({ message: '获取失败', type: 'error', duration: 1000 })
      this.menus = data
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(actionPath) {
      sessionStorage.setItem('actionPath', actionPath)
      this.actionPath = actionPath
    }
  },
  computed: {
    width() {
      return this.isCollapse ? '64px' : '200px'
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    div{
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
      }
    }
  }
  .el-aside{
    background-color: #333744;
    .el-menu{
      border-right: 0;
    }
    .iconfont{
      margin-right: 10px;
    }
  }
  .el-main{
    background-color: #eaedf1;
  }
  .toggle-button{
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>
