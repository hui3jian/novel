<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/header'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Header
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
