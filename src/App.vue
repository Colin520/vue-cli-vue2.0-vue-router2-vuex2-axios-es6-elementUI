<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
    <!-- <router-view name='left'></router-view>
    <router-view name='right'></router-view> -->
    <!-- <router-view></router-view> -->
    <TopSubfield>我是顶部</TopSubfield>
    <div class="home-cen">
      <Center>我是Center</Center>
    </div>
  </div>
</template>

<script>
import TopSubfield from '@/components/TopSubfield';
import Center from '@/components/Center';
export default {
  name: 'app',
  components:{
    TopSubfield,
    Center
  }
}
</script>

<style>
body,html{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home-cen{
  width: 100%;
  background-color: #eff2f7;
}
</style>
