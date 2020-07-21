<template>
  <div id="app">
    <el-header style="padding: 0px" >
      <my-headnav ></my-headnav>
    </el-header>
    <div id="myhome-layout">
    
        <el-container class="ml-layout">
            <el-aside style="width:15%;" v-if="this.$store.state.showLayoutItem[0]">
                <MLSiderMenu style="position: fixed;width:220px"></MLSiderMenu>
            </el-aside>
            <el-main  style="padding:0px;width:65%;overflow: visible">
                <div class="ml-banner" v-if="this.$store.state.showLayoutItem[1]">
                    <div style="color:white;font-size:1.8em">欢迎来到我的个人空间</div>
                    <br/>
                    <div style="color:rgba(255,255,255,0.8);width:60%;">这里是本人的第二个首页，但是建设尚未完成，所以请多多包涵</div>
                </div>
                
                <el-container style="width:100%;padding:0px;">
                    <el-main style="padding:0px;height:100%;flex-basis:1100px;max-width:2000px;width:75%;overflow: visible">
                        <router-view/>
                    </el-main>
                    <el-aside style="padding:0px;height:100%;flex-basis:350px;max-width:2000px;width:30%" v-if="this.$store.state.showLayoutItem[2]">
                        <MLContentSider></MLContentSider>
                    </el-aside>
                </el-container>
                
            </el-main>

            
        </el-container>
        <el-footer style="background-color:#121935"></el-footer>
    </div>
      
  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav';
import MLSiderMenu from '@/newhome/components/MLSiderMenu'
import MLBreadcrumb from '@/newhome/components/MLBreadcrumb'
import MLContent from '@/newhome/components/mlcontent/MLContent'
import MLContentSider from '@/newhome/components/mlcontentsider/MLContentSider'

export default {

  components:{
    'my-headnav':HeadNav,
    MLSiderMenu,
    MLBreadcrumb,
    MLContent,
    MLContentSider,
  },
  name: 'App',
  updated(){

  }
}
</script>

<style lang='scss'>
@import './styles/mlcommon.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}


#myhome-layout{
    //height: 100vh;
    background-color: red;

}
.ml-layout{
    width: 100%;
    height:100%;
    margin: 0 auto;

    background-color: rgb(226, 226, 226);
}
//src="../asset/banner.png" style="width:100%;height:200px"
.ml-banner{
    @include backImg();
    background-image: url("./newhome/asset/img/banner.png");
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;
    
    width: 100%;
    height: 250px;
}

</style>
