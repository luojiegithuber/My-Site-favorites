<template>
    <div id="character-cards">
        <div class="character-card">
            <span>简单易用</span>
            <span>封装现有机器学习与深度学习的方法,通过拖拽实现模型训练支持模型线上部署</span>
        </div>
        <div class="character-card">
            <span>低成本</span>
            <span>支持GPU/CPU混合调度,高效资源复用,云上服务降低成本</span>
        </div>
        <div class="character-card">
            <span>高性能</span>
            <span>支持高纬稀疏数据场景,超大规模深度模型训练;高效结构化压缩训练,加速练;interface模型压缩与量化,提升在线预测单机QP</span>
        </div>
        <div class="character-card">
            <span>多项目特征</span>
            <span>提供多项目,多主题特征库,随用随取,提高特征提取效率</span>
        </div>
    </div>
</template>


<style scoped lang='scss'>
@import 'src/styles/mlcommon.scss';

#character-cards{
    width: 100%;
    @include flex-center();
}

.character-card{
    background: white;
    width: 250px;
    height:250px;

    padding: 10px;

    @include flex-center(column);
    @include center-shadow();
    
        // &:hover{
        //     @include center-shadow-hover();
        // }
}



</style>