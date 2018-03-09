<template>

	<div class="jz-list">
    <slot></slot>
	</div>

</template>

<script type="text/ecmascript-6">
	export default {
		name: 'JzList',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" type="text/scss" scoped>
.jz-list{
  padding: 8px 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
}
</style>
