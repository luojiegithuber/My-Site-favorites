<template>
  <div id="commonly-used-documents">
    <ThemeCard title="常用文档"  :more="data.more">
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
export default class CharacteristicCard extends Vue {
    welcome = 'Hello!';  

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
      this.data = [];
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

#commonly-used-documents{
    background-color: white;
    width: 100%;
    @include center-shadow();
}

#commonly-used-documents a{
    font-size: 1.1em;
}
 
</style>