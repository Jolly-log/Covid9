<template>
  <div class="home">
    <Header /> 
    <!-- <Info /> 病毒信息界面，暂无数据 -->
    <CaseNumber />
    <Map />
    <!-- <MySwiper /> 疫情曲线图界面，暂不兼容 -->
    <Trip />
    <News />

  </div>
</template>

<script>
import Header from '../components/Header.vue'  // 头部界面
import Info from '../components/Info.vue'  // 病毒信息界面
import CaseNumber from '../components/CaseNumber.vue' // 病例数量统计
import Map from '../components/Map.vue' // 地图界面
import MySwiper from '../components/MySwiper.vue' // 疫情曲线图界面
import Trip from '../components/Trip.vue'  // 出行防疫政策查询界面
import News from '../components/News.vue' // 新闻界面

export default {
  name: 'HomeView',
  components: {
    Header,
    Info,
    CaseNumber,
    Map,
    MySwiper,
    Trip,
    News
  }
}
</script>
