<template>
  <div class="search">
    <div>
      <mu-appbar>
        <mu-flat-button color="white" icon="chevron_left" to="/home" slot="left"/>
        <mu-auto-complete
          hintText="请输入作品名/作家"
          @input="handleInput"
          :fullWidth="true"
          :dataSource="dataSource"
          @change="handlechange" />
        <mu-flat-button color="white" icon="search" to="/home" slot="right"/>
      </mu-appbar>
    </div>
    <div class="search-main">
      <dl>
        <dt>搜索历史：</dt>
        <dd>
          <div>
            <mu-chip
              :showDelete="true"
              @delete="handleClose(1)"
              class="demo-chip"
              backgroundColor="#e8ece6"
              color="#5d687d">
              完美世界
            </mu-chip>
          </div>
          <div>
            <mu-chip
              :showDelete="true"
              @delete="handleClose(2)"
              class="demo-chip"
              backgroundColor="#e8ece6"
              color="#5d687d">
              九鼎记
            </mu-chip>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>热门搜索</dt>
        <dd>
          <div><mu-chip class="demo-chip"  backgroundColor="#eaeaea" color="#555">回到唐朝</mu-chip></div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        dataSource: []
      }
    },
    methods: {
      handlechange (val) {
        console.log(`you choose ${val}`)
      },

      handleInput (val) {
        this.dataSource = [
          val,
          val + val,
          val + val + val
        ]
      },
      handleClose(key){
        console.log(key);
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
 @import "~@/assets/scss/common";
</style>
