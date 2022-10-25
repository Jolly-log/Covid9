<template>
  <div>
    <tabs :currentIndex='currentIndex' @onIndex='getIndexHandle'>
        <tab index='chinamap' label='中国地图'><div id='map' class='map'></div></tab>
        <tab index='worldmap' label='世界地图'><div id='worldMap' class='Map'></div></tab>
    </tabs>
  </div>
</template>

<script>
import api from '../api/index'
export default {
    data(){
        return {
            currentIndex:'chinamap'
        }
    },
    methods:{
        getIndexHandle(index){
            this.currentIndex = index
        }
    },
    mounted(){
        api.getProvinceNcov().then((res) => {
            console.log('ChinaMap中响应的数据', res);
            this.$charts.chinaMap('map');
        }).catch((err) => {
            console.log('Map中错误的数据', err);
        }),

        api.getWorldNcov().then(res => {
            console.log('WorldMap中响应的数据', res);
            let allCity = [];
            for(let i = 0; i < res.data.retdata.length; i++){
                var temp = {
                    name:res.data.retdata[i].xArea, // 地区
                    value:res.data.retdata[i].curConfirm // 地区数据
                }
                allCity.push(temp)
            }
            this.$charts.worldMap('worldMap', allCity);
        }).catch(err => {
            console.log('WorldMap中错误的数据', err);
        })
        
    }
}
</script>

<style>
.map{
    width: 375px;
    height: 400px;
}

#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>