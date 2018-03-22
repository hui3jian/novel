<template>
  <div class="rcm">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <!-- slides -->
      <swiper-slide><img src="/static/img/linshi/img01.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img02.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img03.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img04.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img05.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img06.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="/static/img/linshi/img07.jpg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="sort">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuzhuangtu"></use>
        </svg><br/>
        排行榜
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-baogao"></use>
        </svg><br/>
        分类
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-biaoge"></use>
        </svg><br/>
        推荐榜
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bingzhuangtu"></use>
        </svg><br/>
        专题
      </span>
    </div>

    <div class="msg">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guangbo"></use>
        </svg><br/>
      </span>
      <cite>谁说女子不如男！女装大佬带你称王称霸</cite>
    </div>

    <div class="cont">
      <h2><span>畅销精选</span> <span>更多 <i class="iconfont icon-more"></i></span></h2>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data(){
      return{
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination :{
            el: '.swiper-pagination',
            clickable :true,
            bulletClass : 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
