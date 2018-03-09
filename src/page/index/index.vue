<template>

	<div class="index">

    <!-- 作品 -->
    <div class="works" v-if="$store.state.page.isOpenWorks">
      <jz-list>
        <jz-list-item>
          <template slot="left">
            <img src="/static/img/book_bg_linshi.jpg" alt="" >
          </template>
          <template slot="title"><span class="list-title_text-limit">完美世界</span>  <mu-badge content="2小时前更新" color="#f04048" :primary="true"/></template>
          <template slot="describe">
            辰东 著 | 1057章未读 <br/>
            连载至：第一千零五十七章 完美世界
          </template>
          <template slot="operating">
            <mu-icon-button icon="more_vert" @click="openBottomSheet" />
            <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
              <mu-list @itemClick="closeBottomSheet">
                <mu-sub-header>
                  请选择一个
                </mu-sub-header>
                <mu-list-item title="阴阳师"/>
                <mu-list-item title="贪吃蛇大作战"/>
                <mu-list-item title="一划到底"/>
                <mu-list-item title="全民斗地主"/>
              </mu-list>
            </mu-bottom-sheet>
          </template>
        </jz-list-item>
      </jz-list>
    </div>

    <!-- 关注 -->
    <div class="attention" v-else>
      关注
    </div>

	</div>

</template>

<script type="text/ecmascript-6">
  import Vue      from 'vue'
  import store    from '@/store'
  import List     from '@/components/list'

  Vue.use(List);

	export default {
		name: '',
    data () {
      return {
        bottomSheet: false
      }
    },
    methods: {
      closeBottomSheet () {
        this.bottomSheet = false
      },
      openBottomSheet () {
        this.bottomSheet = true
      }
    }
	}
</script>

<style lang="scss" type="text/scss" scoped>
</style>
