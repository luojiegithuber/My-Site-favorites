<template>
  <div id="ml-content-sider">

    <div class="cards-row">
        <MyAI></MyAI> <!--我的AI-->
    </div>
    <br/>
    <div class="cards-row">
        <CommonlyUsedDocuments :data="dataCommonlyUsedDocuments"></CommonlyUsedDocuments> <!--常用文档-->
    </div>
    <br/>
    <div class="cards-row">
        <ProductDynamic :data="dataProductDynamic"></ProductDynamic><!--产品动态-->
    </div>


  </div>
</template>

<script>

import MyAI from './MyAI'
import CommonlyUsedDocuments from './CommonlyUsedDocuments'
import ProductDynamic from './ProductDynamic'

export default {
  name: 'MLContentSider',                                  
  components:{
    MyAI,
    CommonlyUsedDocuments,
    ProductDynamic

  },
  data () {
    return {
      dataProductDynamic:null,
      dataCommonlyUsedDocuments:null

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
#ml-content-sider{
    padding: 15px;
}

.cards-row{
    display:flex;
    justify-content: space-between;
}


</style>