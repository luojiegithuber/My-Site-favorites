<template>
  <div class="my-player">
    <video
        class="video-js"
        controls
        preload="auto"
        poster="http://pic5.40017.cn/03/000/67/6a/rBANB13EzN-Ab0nAAAEFAYJ8LNA538_224x160_00.jpg.webp"
        data-setup='{}'>
    <source src="http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D" type="video/mp4"></source>
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