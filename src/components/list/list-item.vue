<template>

	<div :class="['jz-list-item', {'border': border}]" >
    <div class="jz-list-item_left">
      <slot name="left"></slot>
    </div>
    <div class="jz-list-item_right">
      <div class="jz-list-item_right_title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="jz-list-item_right_describe">
        <slot name="describe">{{describe}}</slot>
      </div>
    </div>
    <div class="jz-list-item_operating">
      <slot name="operating"></slot>
    </div>
	</div>

</template>

<script type="text/ecmascript-6">
	export default {
		name: 'JzListItem',
		data() {
			return {
			}
		},
    props:{
		  border:{
        type: Boolean,
        default: true
      },
		  title:{
		    type: String,
		    default:'标题'
      },
      describe:{
        type: String,
        default:'描述'
      },
      operatingIcon:{
        type: String,
        default:'iconfont icon-moreandroid'
      }
    }
	}
</script>

<style lang="scss" type="text/scss" scoped>
.jz-list-item{
  position: relative;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0.8rem 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-out 0s;
  transition: all 0.2s ease-out 0s;
  &:hover{
    background-color: #f4f4f4;
  }
  &.border{
    border-bottom: 1px solid #e9e9e9;
  }
}
.jz-list-item_left{
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin-right: 1rem;
  img{
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.jz-list-item_right{
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content:space-between;
  width: calc(100% - 9rem);
  text-align: left;
}
.jz-list-item_right_title{
  font-size: 1.3rem;
  color: #333;
  font-weight: 700;
}
.jz-list-item_right_describe{
  font-size: 1.2rem;
  color: #666;
}
.jz-list-item_operating{
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  width: 4rem;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
</style>
