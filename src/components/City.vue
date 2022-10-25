<template>
  <div>
    <div>
        <h3 class='title'>{{ cityName }}疫情数据：</h3>
    </div>
    <div id='city' class='city'></div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
    props:{
        cityName:{
            type:String,
            default:'北京'
        }
    },
    mounted(){
        
        api.getCityNcov({
            city:this.cityName
        }).then(res => {
            console.log('city中的响应', res)
            // this.$charts用来调用echarts中的内容
            this.$charts.cityMap('city', this.cityName)
        }).catch(err => {
            console.log('city中的错误', err)
        })
    }
}
</script>

<style scoped>
.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2828ff;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

.city{
  width: 375px;
  height: 400px;
}
</style>