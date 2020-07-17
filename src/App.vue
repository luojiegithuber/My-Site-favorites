<template>
  <div id="app">
    <el-header style="padding: 0px" >
      <my-headnav  ></my-headnav>
    </el-header>
    <router-view id="head"/>
    <!--<el-footer style="background-color: #222222;">Footer</el-footer>-->
    <el-footer></el-footer>
  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav';


export default {

  components:{
        'my-headnav':HeadNav,
  },
  name: 'App',
  updated(){
      document.querySelector("#head").scrollIntoView(true)
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}


</style>
