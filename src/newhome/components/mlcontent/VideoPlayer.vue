<template>
  <div class="my-player">
    <video
        class="video-js"
        controls
        preload="auto"
        poster="http://www.luojiework.cn:3000/blogs/homevideo/悲伤故事的杰克.jpg"
        data-setup='{}'>
    <source src="http://www.luojiework.cn:3000/blogs/homevideo/悲伤故事的杰克.mp4" type="video/mp4"/>
    </video>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class MyVideoPlayer extends Vue {

    mounted(){
        console.log("单独视频数据",this.videoData);
    }

    @Prop({})videoData !: any;

    constructor() {
      super();
    }

    
}
</script>

<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';

.my-player {
    width:800px;
    height:600px;
}

.video-js{
    width:800px;
    height:600px;
}



</style>