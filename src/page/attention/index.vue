<template>
  <div class="attention">
    <div>
      <mu-appbar title="我的书单">
        <mu-flat-button color="white" icon="chevron_left" to="/home" slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="书单广场" leftIcon="border_all" />
          <mu-menu-item title="创建书单" leftIcon="brightness_3"/>
          <mu-menu-item title="收到的花" leftIcon="content_paste"/>
          <mu-menu-item title="关于书单" leftIcon="center_focus_weak"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div class="attention-main">
      <h4>关注的书单</h4>
      <div>
        <jz-list>
          <jz-list-item>
            <template slot="left">
              <img src="/static/img/book_bg_linshi.jpg" alt="" >
            </template>
            <template slot="title"><span class="list-title_text-limit">完美世界</span>  <mu-badge content="2小时前更新" color="#f04048" :primary="true"/></template>
            <template slot="describe">
              创建人：辰东<br/>
              62本小说 ·  6859关注
            </template>
            <template slot="operating">
              <mu-icon-button icon="clear"/>
            </template>
          </jz-list-item>
        </jz-list>
      </div>
      <mu-chip class="demo-chip" backgroundColor="#009688" color="#fff">
        去书单广场看看
      </mu-chip>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue      from 'vue'
  import List     from '@/components/list'

  Vue.use(List);
</script>
<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
</style>
