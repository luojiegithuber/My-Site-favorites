<template>
  <div id="ml-sidermenu">
    <el-menu
      style="position:sticky;top:0px"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      default-openeds="['1','2']"
      active-text-color="#00FFFF">
      <el-submenu index="1">
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span style="font-size:1.2em;font-weight:bold;color:#E1FFFF">个人主页</span>
        </template>
        <el-menu-item index="1-1">技术博客</el-menu-item>
        <el-menu-item index="1-2">生活板块</el-menu-item>
        <el-menu-item index="1-3">个人画廊</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span style="font-size:1.2em;font-weight:bold;color:#E1FFFF">网页收藏夹</span>
        </template>
        <el-menu-item index="2-1">全部</el-menu-item>
        <el-menu-item index="2-2">学习</el-menu-item>
        <el-menu-item index="2-3">生活</el-menu-item>
        <el-menu-item index="2-4">前端</el-menu-item>
        <el-menu-item index="2-5">社区</el-menu-item>
        <el-menu-item index="2-6">其他</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title" style="font-size:1.2em;font-weight:bold;color:#E1FFFF">我的项目</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
<style>
#ml-sidermenu .ant-menu-item{
    color:	#A9A9A9;
}

.el-submenu__title{
  justify-content: start;
}
</style>