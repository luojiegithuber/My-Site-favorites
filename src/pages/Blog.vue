<template>
  <div id="blog-list">
    <my-bloglist></my-bloglist>
  </div>
</template>

<script>
    import portrait from '@/components/portrait';
    import HeadNav from '@/components/HeadNav';
    import bloglist from '@/components/bloglist';
    import mycard from '@/components/mycard'
    import specter from '@/components/Specter'
    import LoveCount from '@/components/love-count'
  export default {

    components:{
      'my-portrait':portrait,
      'my-headnav':HeadNav,
      'my-bloglist':bloglist,
      'my-card':mycard,
      'my-specter':specter,
      'my-love':LoveCount,
    },

    data() {
      return {

      };
    },

    beforeCreate(){
      this.$store.dispatch("changeShowLayoutItemFun",[1,2,3]);
    },

    created() {



      if (localStorage.getItem("userMsg")) {

         this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("userMsg"))))
      }
    },
    mounted(){

    }
  };
</script>

<style>

#blog-list{
  overflow:visible;
}

</style>
