<template>
   <div class="contain">
      <div id="headImg">
        Hello World<br/><br/>
        用代码书写我最爱的世界

        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        style="padding: 0px;position: absolute;bottom: 0px;width:100%;"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(44,62,80,0.9)"
        text-color="#fff"
        active-text-color="#00FFFF">
          <el-menu-item index="1" @click="jump_blog()" >我的博客</el-menu-item>
          <el-menu-item index="2" @click="jump_collect()">网络收藏夹</el-menu-item>


          <el-submenu index="3">
            <template slot="title">我的项目SHOW</template>
            <el-menu-item index="3-1" @click="jump_blood()">Go.js数据血缘</el-menu-item>
            <el-menu-item index="3-2" @click="jump_game()">React猜颜色</el-menu-item>
            <el-menu-item index="3-3" @click="jump_outbreak()">Echarts疫情天眼</el-menu-item>
          </el-submenu>

          <el-menu-item index="4" @click="jump_editor()">写博客</el-menu-item>
          <el-menu-item index="5" @click="jump_login()">登录</el-menu-item>
        </el-menu>
      </div>
   </div>
</template>

<script>
  export default {
      data() {
        return {
          activeIndex: '1',
        };
      },
      methods: {

        jump_hainan(){
          this.$router.push({name:'Hainan'});
        },
        jump_collect(){
          this.$router.push({name:'Main'});
        },
        jump_blog(){
          this.$router.push({name:'Blog'});
        },
        jump_editor(){
          this.$router.push({name:'BlogEditor'});
        },
        jump_login(){
          this.$router.push({name:'Login'});
        },
        jump_outbreak(){
          window.open("http://www.luojiework.cn:8017/#/Home");
        },
        jump_game(){
          window.open("http://www.luojiework.cn:8019");
        },
        jump_blood(){
          window.open("http://www.luojiework.cn:8020/#/BloodHome");
        },

        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
.el-submenu__title{
  display: flex;
  justify-content:center;
  align-items: center;
}



</style>
