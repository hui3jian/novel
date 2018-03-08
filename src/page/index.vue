<template>

	<div class="">
    <jz-header></jz-header>
    <router-view/>
    <jz-footer></jz-footer>
	</div>

</template>

<script type="text/ecmascript-6">

  import JzHeader from '@/components/header'
  import JzFooter from '@/components/footer'


	export default {
		name: '',
		data() {
			return {

			}
		},
    components:{
      JzHeader,JzFooter
    }
	}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
</style>
