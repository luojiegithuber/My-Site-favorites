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
                    <div style="color:rgba(255,255,255,0.8);width:60%;">一站式机器学习平台,包含两种建模方式, Notebook (集成jupyter)建模,适用于且备良好代码能力的算法开发人员和Studio (可视化建模)适用于应用算法建模的数据分析,数据产品人员。拥有强大稳定的大数据计算能力,提供模型训练与在线部考服务,满足各项目机器学习应用需求。</div>
                </div>
                
                <el-container style="height:100%;width:100%;padding:0px;">
                    <el-main style="padding:0px;height:100%;flex-basis:1100px;max-width:2000px;width:75%">
                       <router-view/>
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

import MLSiderMenu from '@/newhome/components/MLSiderMenu'
import MLBreadcrumb from '@/newhome/components/MLBreadcrumb'
import MLContent from '@/newhome/components/mlcontent/MLContent'
import MLContentSider from '@/newhome/components/mlcontentsider/MLContentSider'


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
    background-image: url("../newhome/asset/img/banner.png");
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;
    
    width: 100%;
    height: 250px;
}


</style>