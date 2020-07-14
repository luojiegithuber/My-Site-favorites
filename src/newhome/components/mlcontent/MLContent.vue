<template>
  <div id="ml-content">
    <!-- 机器学习平台
    <characteristic-card title="帅气"></characteristic-card>
    <characteristic-card title="美丽"></characteristic-card>  -->
    <div class="cards-row">
        <div class="one-row-card" :style="{backgroundImage:rowImg1_1}">实时与离线特征仓库</div>
        <div class="one-row-card" :style="{backgroundImage:rowImg1_2}">Notebook 交互式编程建模</div>
        <div class="one-row-card" :style="{backgroundImage:rowImg1_3}">Studio 可视化拖拽建模</div>
    </div>
    <br/>
    <div class="cards-row">
        <MLCharacteristicCards></MLCharacteristicCards>
    </div>
    <br/>
    <div class="cards-row">
        <VideoCourse></VideoCourse>
    </div>


  </div>
</template>

<script>


import MLCharacteristicCards from './MLCharacteristicCards'
import VideoCourse from './VideoCourse'



export default {
  name: 'MLContent',                                  
  components:{
    MLCharacteristicCards,
    VideoCourse,
  },
  data () {
    return {
        rowImg1_1:"url(" + require("../../asset/img/实时与离线特征仓库.png") + ")",
        rowImg1_2:"url(" + require("../../asset/img/Notebook交互式编程建模.png") + ")",
        rowImg1_3:"url(" + require("../../asset/img/Studio可视化拖拽建模.png") + ")",
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


#ml-content{
  padding: 15px 15px 100px;

}

.cards-row{
    display:flex;
    justify-content: space-between;
}

.one-row-card{
 @include backImg();
 width: 360px;
 height: 180px;

 color:#fff;
 text-align: center;
 line-height: 180px;
 font-size:1.5em;
 font-weight: bold;

}


</style>