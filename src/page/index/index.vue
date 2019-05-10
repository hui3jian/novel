<template>

  <div class="index">

    <!-- 作品 -->
    <div class="works" v-if="$store.state.page.isOpenWorks">
      <jz-list>
        <jz-list-item v-for="(item, key) in list" :key="key">
          <template slot="left">
            <img :src="item.img" alt="" >
          </template>
          <template slot="title"><span class="list-title_text-limit">{{ item.title }}</span>  <mu-badge content="2小时前更新" color="#f04048" :primary="true"/></template>
          <template slot="describe">
            {{ item.author_id.name }} 著 | 1057章未读 <br/>
            连载至：第一千零五十七章 完美世界
          </template>
          <template slot="operating">
            <mu-icon-button icon="more_vert" @click="openBottomSheet" />
            <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet" sheetClass="index-bottom-sheet">
              <div class="top">
                <img :src="item.img" alt="">
                <span>
                  {{ item.title }}
                  <router-link>详情</router-link>
                </span>
              </div>
              <div class="center">
                <img src="/static/img/login-user.jpg" alt="">
                <dl>
                  <dt> {{ item.author_id.name }}</dt>
                  <dd>当前粉丝值：120万</dd>
                  <dd><a>成为他的学徒</a> <i class="iconfont icon-help"></i></dd>
                </dl>
              </div>
              <div class="bottom">
                <h2>
                  <span>自动订阅最新章节</span>
                  <mu-switch  class="demo-switch" />
                </h2>
                <div>
                  <span>
                    <i class="iconfont icon-icondownload"></i><br/>
                    <cite>下载</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-delete"></i><br/>
                    <cite>删除</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-shangchuan"></i><br/>
                    <cite>置顶</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-shoucang"></i><br/>
                    <cite>收藏</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-zhichi"></i><br/>
                    <cite>支持</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-dollar"></i><br/>
                    <cite>打赏</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-edit"></i><br/>
                    <cite>书评</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-huiyuanbiaoqian"></i><br/>
                    <cite>推荐票</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-xunzhang"></i><br/>
                    <cite>月票</cite>
                  </span>
                  <span>
                    <i class="iconfont icon-survey1"></i><br/>
                    <cite>分享</cite>
                  </span>
                </div>
              </div>
            </mu-bottom-sheet>
          </template>
        </jz-list-item>
      </jz-list>
    </div>

    <!-- 关注 -->
    <div class="attention" v-else>
      <ul class="top">
        <li>
          <router-link :to="{ path: 'attention', query: {active: 'list'} }">
            <i class="iconfont icon-zaixianzhidao"></i>
            <span>我的书单</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: 'attention', query: {active: 'columns'} }">
            <i class="iconfont icon-quanbu"></i>
            <span>我的专栏</span>
          </router-link>
        </li>
      </ul>
      <div class="main" >
        <mu-grid-list>
          <mu-grid-tile v-for="tile,index in att_list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
            <img :src="tile.image"/>
            <span slot="title">{{tile.title}}</span>
            <span slot="subTitle">by <b>{{tile.author}}</b></span>
            <mu-icon-button icon="star_border" slot="action"/>
          </mu-grid-tile>
        </mu-grid-list>
      </div>
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
        bottomSheet: false,
        bottomNav: 'recents',
        list: '',
        att_list: [{
          image: '/static/img/linshi/img01.jpg',
          title: '冰山王子专宠野蛮丫头',
          author: '',
          featured: true
        }, {
          image: '/static/img/linshi/img01.jpg',
          title: '冰山王子',
          author: 'ZoeyChoi'
        }, {
          image: '/static/img/linshi/img02.jpg',
          title: '微微一笑',
          author: 'ZoeyChoi'
        }, {
          image: '/static/img/linshi/img03.jpg',
          title: '妃子穿越了',
          author: 'ZoeyChoi'
        }, {
          image: '/static/img/linshi/img04.jpg',
          title: '霸道总裁爱上你',
          author: 'ZoeyChoi'
        }, {
          image: '/static/img/linshi/img05.jpg',
          title: '就算你变肥了也爱你',
          author: 'ZoeyChoi',
          featured: true
        }, {
          image: '/static/img/linshi/img06.jpg',
          title: '想不出标题了',
          author: 'ZoeyChoi'
        }, {
          image: '/static/img/linshi/img07.jpg',
          title: '想不出标题了',
          author: 'ZoeyChoi'
        }]
      }
    },

    mounted(){
      this.indexMainList();
    },

    methods: {
      closeBottomSheet () {
        this.bottomSheet = false
      },
      openBottomSheet () {
        this.bottomSheet = true
      },
      handleChange (val) {
        this.bottomNav = val
      },
      indexMainList(){
        this.$http.get('/api/index/list').then(
          (response) => {
            this.list = response.data;
          },
          (err) => {
            console.log(err);
          })
          .catch((mst) => {
            console.log(mst);
          }
        );

      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
</style>
