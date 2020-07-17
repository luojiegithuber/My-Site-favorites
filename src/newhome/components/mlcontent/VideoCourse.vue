<template>
  <div id="video-course">
    <ThemeCard :icon="icon" title="视频教程" :more="videoData.more">
        <div class="videos" >
            <div class="video-preview" v-for="(video,key) in videoData.items " :key="key"  >
                <div class="video-preview-picture" :style="{backgroundImage:'url('+video.picture_url+')'}">
                    <a-icon type="play-circle" @click="jumpVideo()"/>
                </div>
                <div style="background-color:white;text-align:center;height:40px;padding-top:10px">{{video.name}}</div>
            </div>
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
export default class VideoCourse extends Vue {
    videoData:any = {
            "type": 3,
            "more": "https://www.ly.com/?refid=4140683",
            "items": [
                {
                    "name": "如何上传数据",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
                    "createdAt": "07月09日"
                },
                {
                    "name": "如何搭建试验",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
                    "createdAt": "07月09日"
                },
                {
                    "name": "如何使用社区分享功能",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
                    "createdAt": "07月13日"
                },
                {
                    "name": "如何上传数据2",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
                    "createdAt": "07月13日"
                },
                {
                    "name": "如何创建实验2",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
                    "createdAt": "07月13日"
                },
                {
                    "name": "如何使用社区分享功能2",
                    "link_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.mp4?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909966517&Signature=FCMAZtiSapNpTa4aVJYHpDJ4M%2B8%3D",
                    "picture_url": "http://tcstore1.17usoft.com/mlvideo/d7d8cdf4-4b77-45ea-aed6-81175ae42aa2.jpg?AWSAccessKeyId=DI788HJTIHAPDAIUW0P7&Expires=1909969241&Signature=HnobDwnBxoCzFqbVwHjpi3JWeQQ%3D",
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
        if(event){
            console.log(event.target)
        }
        
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
    height:240px;
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
    width:300px;
    height:200px;
    
    opacity:0.8;

    display:flex;
    justify-content:center;
    align-items:center;
}

.video-preview-picture:hover{
    opacity:1 //移动到上面图片会变亮
}
</style>