<template>
  <div id="ml-sidermenu">
    <a-menu
      style="width: 100%"

      :open-keys="openKeys"
      theme="dark"
      mode="inline"
      @click="handleClick"
      @openChange="onOpenChange"
      
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="user" /><span>个人空间</span></span>
        <a-menu-item key="1-1">
            技术博客
        </a-menu-item>
        <a-menu-item key="1-2">
            生活板块
        </a-menu-item>
         <a-menu-item key="1-3">
            个人画廊
        </a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="mail" /><span>网页收藏夹</span></span>
        <a-menu-item key="全部">
            全部
        </a-menu-item>
        <a-menu-item key="工具" >
            工具
        </a-menu-item>
        <a-menu-item key="学习">
            学习
        </a-menu-item>
        <a-menu-item key="前端" >
            前端
        </a-menu-item>
        <a-menu-item key="生活">
            生活
        </a-menu-item>
        <a-menu-item key="其他" >
            其他
        </a-menu-item>
        <a-menu-item key="社区" >
            社区
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>个人项目</span></span>
        <a-menu-item key="疫情天眼">
            疫情天眼Echarts
        </a-menu-item>
        <a-menu-item key="血缘可视化">
            血缘可视化Gojs
        </a-menu-item>
        <a-menu-item key="猜颜色游戏">
            猜颜色游戏React
        </a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub4" @titleClick="titleClick">
        <span slot="title"><a-icon type="setting" /><span>还没想好干嘛</span></span>
        <a-menu-item key="4-1">
            提个建议呗
        </a-menu-item>
        <a-menu-item key="4-2">
            欢迎私信哦
        </a-menu-item>

      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3','sub4'],
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);

    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e.key);
      switch (e.key) {
        case '全部':
          this.bus.$emit("toCollection", '全部');
          break;
        case '工具':
          this.bus.$emit("toCollection", '工具');
          break;
        case '学习':
          this.bus.$emit("toCollection", '学习');
          break;
        case '前端':
          this.bus.$emit("toCollection", '前端');
          break;
        case '生活':
          this.bus.$emit("toCollection", '生活');
          break;
        case '其他':
          this.bus.$emit("toCollection", '其他');
          break;

        case '疫情天眼':
          window.open("http://www.luojiework.cn:8017/#/Home");
          break;
        case '血缘可视化':
          window.open("http://www.luojiework.cn:8020/#/BloodHome");
          break;
        case '猜颜色游戏':
          window.open("http://www.luojiework.cn:8019");
          break;
        default:
          break;
      }
    },
    titleClick(e) {
      console.log('titleClick', e.key);

      switch (e.key) {
        case 'sub1':
          this.$router.push({name:'Blog'});
          break;

        case 'sub2':
          this.$router.push({name:'Main'});
          break;
      
        default:
          break;
      }
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }

    },

  },
};
</script>
<style>
#ml-sidermenu .ant-menu-item{
    color:	#dfdfdf;
}

.ant-menu-submenu-title{

}

</style>