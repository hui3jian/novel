<template>

	<div class="login">
    <div class="login-bg"></div>
    <div class="login-main">
      <h2>
        <span class="iconfont icon-back"></span>
        <span class="right">切换账号</span>
      </h2>
      <div class="login-main-form">
        <img src="~@/assets/img/login-user.jpg" alt="">
        <mu-text-field label="账号" hintText="请输入账号" type="text" labelFloat/><br/>
        <mu-text-field label="密码" hintText="请输入密码" type="password"  labelFloat/><br/>

        <mu-raised-button label="登陆" class="" backgroundColor="rgb(75, 150, 44)" />
      </div>
      <div class="login-main-footer">
        <mu-flat-button label="忘记密码" class="demo-flat-button" icon="android" color="#fff"/>
        <a href="#">注册</a>
      </div>
    </div>
	</div>

</template>

<script type="text/ecmascript-6">
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
