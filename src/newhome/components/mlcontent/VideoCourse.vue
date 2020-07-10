<template>
  <div id="video-course">
    <ThemeCard title="视频教程">
        <div class="videos">
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
        <img src='../../asset/img/实时与离线特征仓库.png' style='width:300px;height:200px'/>
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

    @Prop({default: '卡片title'})
    title: string

    constructor() {
      super();
      this.title = '卡片title';
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

#video-course{
    background-color: white;
    width: 100%;
}

.videos{
    height: 450px;
    @include flex-center();
    flex-flow: wrap;
    align-content:space-around;
}

</style>