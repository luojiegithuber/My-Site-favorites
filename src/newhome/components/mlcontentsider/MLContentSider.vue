<template>
  <div id="ml-content-sider">

    <div class="cards-row">
        <MyCardContainer></MyCardContainer> <!--我的AI-->
    </div>
    <br/>
    <div class="cards-row">
        <MyLove :data="dataCommonlyUsedDocuments"></MyLove> <!--常用文档-->
    </div>
    <br/>
    <div class="cards-row">
        <RecommendedRead :data="dataProductDynamic"></RecommendedRead><!--产品动态-->
    </div>


  </div>
</template>

<script>

import MyCardContainer from './MyCardContainer'
import MyLove from './MyLove'
import RecommendedRead from './RecommendedRead'


export default {
  name: 'MLContentSider',                                  
  components:{
    MyCardContainer,
    MyLove,
    RecommendedRead

  },
  data () {
    return {
      dataProductDynamic:null,
      dataCommonlyUsedDocuments:null

    }
  },

}
</script>


<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';
#ml-content-sider{
    padding: 15px;
}

.cards-row{
    display:flex;
    justify-content: space-between;
}


</style>