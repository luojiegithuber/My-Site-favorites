<template>
  <div id="my-love">
    <love-count></love-count>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import ThemeCard from '../ThemeCard.vue'
import LoveCount from '@/components/love-count.vue'

@Component({
    components:{
        ThemeCard,
        LoveCount
    }
})
export default class MyLove extends Vue {
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

#my-love{
    background-color: white;
    width: 100%;
    @include center-shadow();
}

#my-love a{
    font-size: 1.1em;
}
 
</style>