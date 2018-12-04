<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}</h3>
        <p>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </p>
    </div>
</template>

<script>
import store from "@/vuex/store";
import axios from 'axios'
export default {
    data(){
        return{
            msg:'Hello Vuex'
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
