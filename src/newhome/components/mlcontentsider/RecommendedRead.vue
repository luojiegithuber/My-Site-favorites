<template>
  <div id="recommended-read">
    <ThemeCard title="每日一句" :more="data.more">
        <img class="EnPic" :src="imgSrc">


            <!--<div>
            <div v-for="(elem, index) in data.items" :key=index>
                <a :href="elem.link_url"> {{ elem.name }} </a>  
                <span style="float:right"> {{elem.createdAt}}</span>  
            </div> 
            -->

    </ThemeCard>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import ThemeCard from '../ThemeCard.vue'
import axios from 'axios'

@Component({
    components:{
        ThemeCard,
    }
})
export default class RecommendedRead extends Vue {
    welcome = "hello";
    imgSrc:string = "";

    print():void {
        alert(this.welcome);
    };

    change():void {
        this.welcome = 'Hi !';
    };

    mounted(){
        this.getEnglilshPic()
    }

    @Prop({})
    data: Array<string>

    constructor() {
      super();
      this.data =[];
    }

    @Watch('welcome')
    onWelcomeChanged(val: string, oldVal: string){
        console.log(val);
        console.log(oldVal);
    }

    //每日一句
    getEnglilshPic(){
      axios({
            url: '/tianapi/txapi/everyday/index?key=8904de751142e1a252a8e864174bb93d',
            method: 'get',
        }).then((res) => {
            this.imgSrc = res.data.newslist[0].imgurl;
        })
    }
    
}
</script>

<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';
#recommended-read{
 width:100%;
}

.EnPic{
    width:100%;
    height:400px;

}



</style>