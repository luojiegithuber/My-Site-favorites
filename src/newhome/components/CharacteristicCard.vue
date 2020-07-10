<template>
  <div id="characteristic-card">
    {{welcome}}
    特征卡片【{{title}}】
    <button @click = "print">打印</button>
    <button @click = "change">切换</button>
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