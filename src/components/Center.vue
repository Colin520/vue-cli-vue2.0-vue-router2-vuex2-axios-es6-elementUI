<template>
    <div id="center">
        <div>{{msg}}</div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import axios from 'axios'
export default {
  name:'center',
    data(){
        return{
            msg:'我是中间的Center-YF'
        }
    },
    store,
    created:function(){
      axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then(response=>{
         console.log('成功',response);
         this.oftenGoods=response.data;
      })
      .catch(error=>{
          console.log('失败',error);
        //   alert('网络错误，不能访问');
      })
  },
}
</script>

<style scoped>
body,html{
  margin: 0px;
  padding: 0px;
}
#center{
  width: 100%;
  height: 700px;
  background-color: paleturquoise;
}
</style>

