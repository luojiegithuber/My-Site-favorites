<template>
  <div id="video-course">
    <ThemeCard :icon="icon" title="个人视频" :more="videoData.more">
        <div class="videos" >
            <div class="video-preview" v-for="(video,key) in videoData.items " :key="key"  >
                <div class="video-preview-picture" :style="{backgroundImage:'url('+video.picture_url+')'}">
                    <a-icon type="play-circle" @click="jumpVideo()"/>
                </div>
                <div style="background-color:white;text-align:center;height:40px;padding-top:10px">{{video.name}}</div>
            </div>
        </div>


    <a-modal
        title="Title"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        width="900px"
        >
        <VideoPlayer v-if="visible"></VideoPlayer>
    </a-modal>
    </ThemeCard>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import ThemeCard from '../ThemeCard.vue'
import VideoPlayer from './VideoPlayer.vue'

@Component({
    components:{
        ThemeCard,
        VideoPlayer
    }
})
export default class VideoCourse extends Vue {
    visible:boolean = false;
    videoData:any = {
            "type": 3,
            "more": "https://www.ly.com/?refid=4140683",
            "items": [
                {
                    "name": "悲伤故事的杰克",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/悲伤故事的杰克.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/悲伤故事的杰克.jpg",
                    "createdAt": "07月09日"
                },
                {
                    "name": "风扇细节",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/风扇细节.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/风扇细节.jpg",
                    "createdAt": "07月09日"
                },
                {
                    "name": "杰克和小玉的舞台剧",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/杰克和小玉的舞台剧.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/杰克和小玉的舞台剧.jpg",
                    "createdAt": "07月13日"
                },
                {
                    "name": "偶像的钢琴曲",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/偶像的钢琴曲.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/偶像的钢琴曲.jpg",
                    "createdAt": "07月13日"
                },
                {
                    "name": "烫嘴的歌词",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/烫嘴的歌词.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/烫嘴的歌词.jpg",
                    "createdAt": "07月13日"
                },
                {
                    "name": "虚伪的音乐家",
                    "link_url": "http://www.luojiework.cn:3000/blogs/homevideo/虚伪的音乐家.mp4",
                    "picture_url": "http://www.luojiework.cn:3000/blogs/homevideo/虚伪的音乐家.jpg",
                    "createdAt": "07月13日"
                }
            ]
        };  

    mounted() {
        let that = this;
        Vue.prototype.bus.$on("toVideoCourse",function(data:any){
            console.log("视频内容",data);
            that.videoData = data;  
        });
    }

    jumpVideo(){
        this.visible = true;
    }

    handleOk(){}
    handleCancel(){
        this.visible = false;
    }


    @Prop({})title!: string

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

#video-course{
    background-color: white;
    width: 100%;
}

.videos{
    height: 500px;
    display:flex;
    flex-flow: wrap;
    justify-content:space-around;

    font-size:1.1em;
    font-weight:bold;
    color:black;
    
}

.video-preview{
    background-color:#000;
    width: 30%;
    height:40%;
}

.video-preview i{
    color:white;
    font-size:50px;

    width:50px;
    height:50px;

    cursor:pointer;
}

.video-preview-picture{
    
    @include backImg;
    width:100%;
    height:100%;
    
    opacity:0.8;

    display:flex;
    justify-content:center;
    align-items:center;
}

.video-preview-picture:hover{
    opacity:1 //移动到上面图片会变亮
}


</style>