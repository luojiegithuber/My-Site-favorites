<template>
  <!-- 这是一种容器 -->
  <div class="theme-card">
      <a-icon type="youtube" />
      <span style="font:bold 1.2em arial,sans-serif;color:black">{{title}}</span>
      <a style="float:right" :href="more">更多</a>
      <hr/>

      <slot></slot>

  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class CharacteristicCard extends Vue {
    welcome = 'Hello!';  

    print():void {
        alert(this.welcome);
    };

    change():void {
        this.welcome = 'Hi !';
    };

    @Prop({default: '卡片title'})title !: string
    @Prop({default: '卡片title'})more !: string


    constructor() {
      super();

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

.theme-card{
    @include center-shadow();
    background-color: white;
    padding:10px;
    width: 98%;
    height: 100%;
}

</style>