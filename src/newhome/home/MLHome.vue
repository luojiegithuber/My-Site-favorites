<template>
  <div id="ml-home">
    <!-- 机器学习平台
    <characteristic-card title="帅气"></characteristic-card>
    <characteristic-card title="美丽"></characteristic-card>  -->
    <a-layout-header ></a-layout-header>

        <a-layout class="ml-layout">
            <a-layout-sider style="background-color:#fff">
                <MLSiderMenu></MLSiderMenu>
            </a-layout-sider>
            <a-layout-content>
                <MLBreadcrumb/>
                <div class="ml-banner">
                    <div style="color:white;font-size:2.5em">欢迎使用同程艺龙机器学习平台</div>
                    <br/>
                    <div style="color:rgba(255,255,255,0.8);width:60%;font-size:1.3em">一站式机器学习平台,包含两种建模方式, Notebook (集成jupyter)建模,适用于且备良好代码能力的算法开发人员和Studio (可视化建模)适用于应用算法建模的数据分析,数据产品人员。拥有强大稳定的大数据计算能力,提供模型训练与在线部考服务,满足各项目机器学习应用需求。</div>
                </div>
                
                <a-layout style="height:100%">

                    <a-layout-content style="flex-basis:1100px;max-width:2000px;width:1100px">
                       <MLContent></MLContent>
                    </a-layout-content>
                    <a-layout-sider style="flex-basis:550px;max-width:1000px;width:550px;background-color:#F0F2F5">
                        <MLContentSider></MLContentSider>
                    </a-layout-sider>
                </a-layout>
                
            </a-layout-content>

        </a-layout>

  </div>
</template>

<script>
import store from '@/store'
//import CharacteristicCard from '../components/CharacteristicCard'
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

    //全屏显示该平台  
    store.dispatch('ChangeShowMode', true);

  },
  methods:{

  }
}
</script>


<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';

#ml-home{
    height: 100vh;
    background-color: #8890a7;

}
.ml-layout{
    width: 100%;
    height:100%;
    margin: 0 auto;
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
    height: 330px;
}


</style>