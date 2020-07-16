<template>
    <div id="my-ai">
        <my-card></my-card>
    </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import ThemeCard from '../ThemeCard.vue'
import MyCard from '@/components/mycard.vue'


@Component({
    components:{
        ThemeCard,
        MyCard
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

    @Prop({})data:Array<string>

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
#my-ai{
    @include mycard;
    border-radius: 20px;
}



</style>