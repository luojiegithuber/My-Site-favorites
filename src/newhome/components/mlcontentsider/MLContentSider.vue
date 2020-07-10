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
import {fetchMLOverview} from '@/api/machinelearning/home/home.js';

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
    //请求概览数据
    this.getMLOverview([1,2,3]);

  },
  methods:{
    async getMLOverview(types){
      const response = await fetchMLOverview(types).catch(error => error.response);
      //const responseData = response.data;
      //console.log('返回的数据',responseData);

      let responseData =[
          {
              "type": 1,
              "more": "https://www.ly.com/?refid=4140683",
              "items": [
                  {
                      "name": "新手指引",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "",
                      "createdAt": "07月09日"
                  },
                  {
                      "name": "Notebook使用说明",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "",
                      "createdAt": "07月09日"
                  }
              ]
          },
          {
              "type": 2,
              "more": "https://www.ly.com/?refid=4140683",
              "items": [
                  {
                      "name": "离线特征已上线",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "",
                      "createdAt": "07月09日"
                  },
                  {
                      "name": "可视化建模",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "",
                      "createdAt": "07月09日"
                  }
              ]
          },
          {
              "type": 3,
              "more": "https://www.ly.com/?refid=4140683",
              "items": [
                  {
                      "name": "如何上传数据",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "http://pic5.40017.cn/03/000/67/6a/rBANB13EzN-Ab0nAAAEFAYJ8LNA538_224x160_00.jpg.webp",
                      "createdAt": "07月09日"
                  },
                  {
                      "name": "如何搭建试验",
                      "link_url": "https://www.ly.com/?refid=4140683",
                      "picture_url": "http://pic5.40017.cn/04/002/7a/a1/rBTJUl1ncLiAW2FsAAGqYU-gPrQ704_224x160_00.jpg.webp",
                      "createdAt": "07月09日"
                  }
              ]
          }
      ];

      this.dataCommonlyUsedDocuments = responseData[0];
      this.dataProductDynamic = responseData[1];

      console.log(this.dataProductDynamic)
    }

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