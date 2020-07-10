<template>
  <div id="my-ai">
    <ThemeCard title="我的AI">
        <div>
            <a-menu v-model="current" mode="horizontal" style="display:flex;justify-content:space-between">
                <a-menu-item > 可视化模型 </a-menu-item>
                <a-menu-item > NoteBook模型 </a-menu-item>
                <a-menu-item > 模型在线服务 </a-menu-item>
            </a-menu>
            <div>总实验数：<span>5</span></div>
            <div>进行中实验数：<span>5</span></div>
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
}



</style>