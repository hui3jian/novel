<template>

	<div class="index">

    <!-- 作品 -->
    <div class="works" v-if="$store.state.page.isOpenWorks">
      <mu-list>
        <mu-list-item title="Vacation itinerary" describeText="Jan 20, 2014">
          <mu-avatar src="~@/assets/img/login-user.jpg" slot="leftAvatar"/>
          <mu-icon value="info" slot="right"/>
        </mu-list-item>
      </mu-list>
    </div>

    <!-- 关注 -->
    <div class="attention" v-else>
      关注
    </div>

	</div>

</template>

<script type="text/ecmascript-6">
  import store    from '@/store'

	export default {
		name: '',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "~@/assets/scss/common";
</style>
