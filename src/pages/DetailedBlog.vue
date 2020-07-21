<template>
  <div style="background-color:white">
    <my-showblog></my-showblog>
  </div>
</template>

<script>

    import showBlog from '@/components/showBlog';

  export default {

    components:{

      'my-showblog':showBlog,

    },

    data() {
      return {

      };
    },

    beforeCreate(){
      this.$store.dispatch("changeShowLayoutItemFun",[1,null,3]);
    },
  };
</script>

<style>

</style>
