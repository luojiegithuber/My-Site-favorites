<template>
  <div id="ml-home">

        <el-container class="ml-layout">
            <el-aside style="width:15%;">
                <MLSiderMenu style="position: fixed;width:220px"></MLSiderMenu>
            </el-aside>
            <el-main  style="padding:0px;width:65%;overflow:hidden">
                <div class="ml-banner">
                    <div style="color:white;font-size:1.8em">欢迎来到我的个人空间</div>
                    <br/>
                    <div style="color:rgba(255,255,255,0.8);width:60%;">这里是本人的第二个首页，遗憾的是该页面尚未建设完成，您可以随便逛逛，如有需要请访问&nbsp;&nbsp;<a href="http://www.luojiework.cn/#/OldHome"><b>旧首页</b></a></div>
                </div>
                
                <el-container style="height:100%;width:100%;padding:0px;">
                    <el-main style="padding:0px;height:100%;flex-basis:1100px;max-width:2000px;width:75%">
                       <MLContent></MLContent>
                    </el-main>
                    <el-aside style="padding:0px;height:100%;flex-basis:350px;max-width:2000px;width:30%">
                        <MLContentSider></MLContentSider>
                    </el-aside>
                </el-container>
                
            </el-main>

        </el-container>

  </div>
</template>

<script>

import MLSiderMenu from '../components/MLSiderMenu'
import MLBreadcrumb from '../components/MLBreadcrumb'
import MLContent from '../components/mlcontent/MLContent'
import MLContentSider from '../components/mlcontentsider/MLContentSider'


export default {
  name: 'MLHome',                                  
  components:{
    MLSiderMenu,
    MLBreadcrumb,
    MLContent,
    MLContentSider,

  },
  data () {
    return {

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>


<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';

#ml-home{
    height: 100vh;
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
    background-image: url("../asset/img/banner.png");
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;
    
    width: 100%;
    height: 250px;
}


</style>