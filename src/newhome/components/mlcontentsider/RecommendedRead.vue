<template>
  <div id="recommended-read">
    <ThemeCard title="推荐阅读" :more="data.more">
        <div>
            <div v-for="(elem, index) in data.items" :key=index>
                <a :href="elem.link_url"> {{ elem.name }} </a>  
                <span style="float:right"> {{elem.createdAt}}</span>  
            </div> 
        </div>
    </ThemeCard>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import ThemeCard from '../ThemeCard.vue'

@Component({
    components:{
        ThemeCard,
    }
})
export default class RecommendedRead extends Vue {
    welcome = "hello";

    print():void {
        alert(this.welcome);
    };

    change():void {
        this.welcome = 'Hi !';
    };

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
    
}
</script>

<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';
#product-dynamic{
 @include mycard;
}



</style>