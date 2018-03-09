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

      <mu-icon-button icon="search" slot="right"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1"/>
        <mu-menu-item title="菜单 2"/>
        <mu-menu-item title="菜单 3"/>
        <mu-menu-item title="菜单 4"/>
        <mu-menu-item title="菜单 5"/>
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
