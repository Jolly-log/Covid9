<template>
  <div class='spring'>
    <h3 class='title'>疫情期间出行防疫政策</h3>
    <Cascader label='出发城市' :options='options' @onValues='getFromCity'/>
    <Cascader label='到达城市' :options='options' @onValues='getToCity'/>
    <van-button type="info" block>信息按钮</van-button>
  </div>
</template>

<script>
import Cascader from './Cascader.vue'
import api from '../api/index'
export default {
    components:{
        Cascader,
    },
    data(){
        return {
            options:[],
        }
    },
    methods:{
        getFromCity(fromCity){
            console.log(fromCity)
        },
        getToCity(toCity){
            console.log(toCity)
        }
    },
    mounted(){
        api.getCitys({
            key:''
        }).then(res => {
            console.log('Trip中响应的数据：', res);
            var currentAll = [];
            for(var i = 0; i < res.data.result.length; i++){
                var arr = [];
                for(var j = 0; j < res.data.result[i].citys.length; j++){
                    var temp2 = {
                        text:res.data.result[i].citys[j].city,
                        value:res.data.result[i].citys[j].city_id
                    }
                    arr.push(temp2);
                }
                var temp1 = {
                    text:res.data.result[i].province,
                    value:res.data.result[i].province_id,
                    children:arr
                }
                currentAll.push(temp1)
            }
            this.options = currentAll
        }).catch(err => {
            console.log('Trip中错误的数据：', err)
        })
    }
}
</script>

<style scoped>
.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.spring .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>