<template>
  <div class="my-player">
    <video
        class="video-js"
        controls
        preload="auto"
        :poster="curVideo.picture_url"
        data-setup='{}'>
    <source :src="curVideo.link_url" type="video/mp4"/>
    </video>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class MyVideoPlayer extends Vue {

    @Prop({})curVideo !: any;

    constructor() {
      super();
    }

    
}
</script>

<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';


.video-js{
    width:100%;
    height:100%;
}


</style>