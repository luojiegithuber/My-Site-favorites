<template>
  <div id="ml-sidermenu">
    <a-menu
      style="width: 100%"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
      
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="setting" /><span>特征工程</span></span>
        <a-menu-item key="1-1">
            离线特征仓库
        </a-menu-item>
        <a-menu-item key="1-2">
            实时特征仓库
        </a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="mail" /><span>模型开发和训练</span></span>
        <a-menu-item key="2-1">
            Studio-可视化建模
        </a-menu-item>
        <a-menu-item key="2-2">
            Notebook建模
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>模型管理</span></span>
        <a-menu-item key="3-1">
            模型列表
        </a-menu-item>

      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>模型部署</span></span>
        <a-menu-item key="4-1">
            在线模型推理服务
        </a-menu-item>
        <a-menu-item key="4-2">
            离线模型推理服务
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
    color:	#A9A9A9;
}

</style>