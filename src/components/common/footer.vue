<template>

	<div class="footer">
    <mu-paper style="height: 100%">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="movies" title="书架" icon="local_library"/>
        <mu-bottom-nav-item value="music" title="推荐" icon="thumb_up"/>
        <mu-bottom-nav-item value="books" title="书圈" icon="stars"/>
        <mu-bottom-nav-item value="pictures" title="用户" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
	</div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        bottomNav: 'movies',
        bottomNavColor: 'movies',
        homeOpen:true,
        recommendOpen:false,
        squareOpen:false,
        userOpen:false,
      }
    },
    mounted(){
      var nowUrl = this.$route.path;
      if(nowUrl.indexOf('home') >= 0) this.homeOpen = true;
      if(nowUrl.indexOf('recommend') >= 0) this.homeOpen = true;
      if(nowUrl.indexOf('square') >= 0) this.homeOpen = true;
      if(nowUrl.indexOf('user') >= 0) this.homeOpen = true;
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

</style>
