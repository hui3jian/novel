<template>

  <div class="header">
    <mu-appbar style="height: 100%">
      <mu-flat-button
        color="white"
        label="作品"
        slot="left"
        :class="['left-content', {'active' : $store.state.page.isOpenWorks}]"
        @click="$store.state.page.isOpenWorks = true"/>
      <mu-flat-button
        color="white"
        label="关注"
        slot="left"
        :class="['left-content', {'active' : !$store.state.page.isOpenWorks}]"
        @click="$store.state.page.isOpenWorks = false"/>

      <mu-icon-button icon="search" slot="right" to="/search"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="图墙模式" leftIcon="border_all" />
        <mu-menu-item title="夜间模式" leftIcon="brightness_3"/>
        <mu-menu-item title="导入本地书" leftIcon="content_paste"/>
        <mu-menu-item title="扫一扫" leftIcon="center_focus_weak"/>
        <mu-menu-item title="批量管理" leftIcon="format_list_bulleted"/>
        <mu-menu-item title="分组视图" leftIcon="filter_none"/>
        <mu-menu-item title="综合排序" leftIcon="import_export"/>
        <mu-menu-item title="浏览记录" leftIcon="query_builder"/>
      </mu-icon-menu>
    </mu-appbar>
  </div>

</template>
<script type="text/ecmascript-6">
  import store    from '@/store'

  export default {
    name: 'JzHeader',
    store,
    data(){
      return{
      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
</style>
