<template>

  <div id="my-card">
    <br/><br/><br/>
    <my-portrait></my-portrait>
    <br/><br/>
    <el-button style="margin:10px 5px;" >我的简历</el-button>
    <el-button style="margin:10px 5px;" type="info" @click="jump_Github()">Github</el-button><br/>
    <el-button style="margin:10px 5px;" type="primary"  >知乎</el-button>
    <el-button style="margin:10px 5px;" type="success"  >LeetCode</el-button><br/>
    <el-button style="margin:10px 5px;" type="danger"  @click="jump_csdn()">CSDN博客</el-button>
    <el-button style="margin:10px 5px;" type="warning"  >关于我</el-button>
  </div>

</template>

<script>
    import portrait from '@/components/portrait';

  export default {

    components:{
      'my-portrait':portrait,
    },

    data() {
      return {

      };

    },

    methods:{
      jump_csdn(){
        window.location.href = "https://me.csdn.net/qq_41841048"
      },
      jump_Github(){
        window.location.href = "https://github.com/luojiegithuber"
      },

    }
  };
</script>

<style>


#my-card{
  width:320px;
  height:450px;

  text-align: center;

  background-image:url(../assets/卡片背景.jpg);
  background-size: 100% 100%; 

  border-radius: 20px;

}

</style>
