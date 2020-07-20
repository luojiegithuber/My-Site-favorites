<template>
  <div id="ml-sidermenu">
    <a-menu
      style="width: 120%"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      theme="dark"
      mode="inline"
      @click="handleClick"
      
    >
      <a-sub-menu key="sub1">
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
        <a-menu-item key="2-1">
            全部
        </a-menu-item>
        <a-menu-item key="2-2" >
            工具
        </a-menu-item>
        <a-menu-item key="2-3">
            学习
        </a-menu-item>
        <a-menu-item key="2-4" >
            前端
        </a-menu-item>
        <a-menu-item key="2-5">
            生活
        </a-menu-item>
        <a-menu-item key="2-6" >
            其他
        </a-menu-item>
        <a-menu-item key="2-7" >
            社区
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>个人项目</span></span>
        <a-menu-item key="3-1">
            疫情天眼
        </a-menu-item>
        <a-menu-item key="3-2">
            血缘可视化
        </a-menu-item>
        <a-menu-item key="3-3">
            猜颜色游戏
        </a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub4">
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
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
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