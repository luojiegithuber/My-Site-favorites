<template>
    <my-bloglist></my-bloglist>
</template>

<script>

    import bloglist from '@/components/bloglist';

  export default {

    components:{

      'my-bloglist':bloglist,

    },

    data() {
      return {

      };
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


</style>
