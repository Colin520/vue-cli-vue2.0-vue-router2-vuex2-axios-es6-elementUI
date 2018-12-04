<template>
    <div id="top">
        <span>{{msg}}</span>
    </div>
</template>

<script>
import store from "@/vuex/store";
import axios from 'axios'
export default {
  name:'top',
    data(){
        return{
            msg:'我是顶部导航栏--书记'
        }
    },
}
</script>

<style scoped>
body,html{
  margin: 0px;
  padding: 0px;
}
#top{
  width: 100%;
  height: 40px;
  background-color: #fff6f1;
}
</style>


