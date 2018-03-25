<template>

	<div class="main-content" :style="{'minHeight': screenHeight + 'px'}">
    <jz-header></jz-header>
    <router-view/>
    <jz-footer></jz-footer>
	</div>

</template>

<script type="text/ecmascript-6">

  import JzHeader from '@/components/common/header'
  import JzFooter from '@/components/common/footer'


	export default {
		name: '',
		data() {
			return {
        screenHeight: ''
			}
		},
    mounted(){
		  this.screenHeight = window.screen.height;
    },
    components:{
      JzHeader,JzFooter
    }
	}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
  .main-content{
    background-color: #eee;
    padding-bottom: 6rem;
  }
</style>
