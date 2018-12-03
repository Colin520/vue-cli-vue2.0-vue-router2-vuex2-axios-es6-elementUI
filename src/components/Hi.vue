<template>
  <div>
      <h2>{{ msg }}</h2>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'woshi Hi yem'
    }
  }
}
</script>

<style scoped>

</style>
