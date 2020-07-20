<template>
    <div id="character-cards">
        <div class="character-card">
            <br/>
            <a href="https://www.bilibili.com/" target="_blank">
                <img  class="card-icon" src="../../asset/icon/哔哩哔哩.svg"/>
            </a>
            <span>bilibili网站</span>
            <br/><br/><br/>
            <a href="http://csujwc.its.csu.edu.cn/" target="_blank">
                <img  class="card-icon" src="../../asset/icon/学校.svg"/>
            </a>
            <span>中南大学教务系统</span>
        </div>
        <div class="character-card">
            <br/>
            <a href="https://cn.vuejs.org/v2/guide/" target="_blank">
                <img  class="card-icon" src="../../asset/icon/Vue.svg"/>
            </a>
            <span>Vue.js文档</span>
            <br/><br/><br/>
            <a href="https://react.docschina.org/docs/getting-started.html" target="_blank">
                <img  class="card-icon" src="../../asset/icon/React.svg"/>
            </a>
            <span>React.js文档</span>

        </div>
        <div class="character-card">
            <br/>
            <a href="https://www.webpackjs.com/concepts/" target="_blank">
                <img  class="card-icon" src="../../asset/icon/Webpack.svg"/>
            </a>
            <span>Webpack文档</span>
             <br/><br/><br/>
            <a href="www.baidu.com" target="_blank">
                <img  class="card-icon" src="../../asset/icon/js.svg"/>
            </a>
            <span>js的一些题目</span>
        </div>
        <div class="character-card">
            <br/>
            <a href="www.baidu.com" target="_blank">
                <img  class="card-icon" src="../../asset/icon/switch.svg"/>
            </a>
            <span>Game栏目</span>
             <br/><br/><br/>
            <a href="https://www.nowcoder.com/" target="_blank">
                <img  class="card-icon" src="../../asset/icon/牛.svg"/>
            </a>
            <span>牛客网</span>
        </div>
    </div>
</template>


<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';

#character-cards{
    width: 100%;
    @include flex-center();
    justify-content: space-between;

    font-weight: bold;
    color:#3f3f3f
}

.character-card{
    

    background: white;
    width: 24%;
    height:250px;

    padding: 10px;

    @include flex-center(column);
    justify-content: start;

    @include center-shadow();
    
        // &:hover{
        //     @include center-shadow-hover();
        // }
}

.card-icon{
    width: 50px;
    height: 50px;
    cursor:pointer;
}


</style>