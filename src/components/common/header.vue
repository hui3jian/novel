<template>

  <div class="header">

    <!-- 首页头部 -->
    <template v-if="homeOpen">
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
    </template>

    <!-- 推荐页头部 -->
    <template v-if="recommendOpen">
      <mu-appbar style="height: 100%;text-align: left">
        <mu-dropDown-menu
          :value="value"
          @change="handleChange"
          slot="left"
          iconClass="recommend-header_left-icon"
          labelClass="recommend-header_left-label"
          underlineClass="recommend-header_left-underLine">
          <mu-menu-item value="1" title="男生"/>
          <mu-menu-item value="0" title="女生"/>
        </mu-dropDown-menu>
        <mu-icon-button icon="search" slot="right" to="/search"/>
      </mu-appbar>
    </template>

    <!-- 广场页头部 -->
    <template v-if="squareOpen">

    </template>

    <!-- 用户页头部 -->
    <template v-if="userOpen">

    </template>

  </div>

</template>
<script type="text/ecmascript-6">
  import store    from '@/store'

  export default {
    name: 'JzHeader',
    store,
    data(){
      return{
        value: '1',

        homeOpen: false,
        recommendOpen: false,
        squareOpen: false,
        userOpen: false,
      }
    },
    watch:{
      '$route': function () {
        this.returnThieHead();
      }
    },
    mounted(){
     this.returnThieHead();
    },
    methods:{
      returnThieHead () {
        var nowUrl = this.$route.path;
        this.homeOpen = nowUrl.indexOf('home') >= 0 ? true: false;
        this.recommendOpen = nowUrl.indexOf('recommend') >= 0 ? true: false;
        this.squareOpen = nowUrl.indexOf('square') >= 0 ? true: false;
        this.userOpen = nowUrl.indexOf('user') >= 0 ? true: false;
      },
      handleChange (value) {
        this.value = value
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  @import "~@/assets/scss/common";

</style>
