const base = {
    baseUrl: '/apied',  // 天行数据
    baseLogin:'/login', // iwenwiki数据
    juheData:'/juhe',
    ncov: '/ncov/index', // 详情数据
    // provinceNcov:"/wapicovid19/all.php",  // 全国疫情数据
    worldNcov:'/api/covid19-server/foreign.php', // 世界疫情数据
    cityNcov:"/wapicovid19/guonei.php", // 省市疫情数据 
    citys:'/api/covid19-server/city_list.php' // 城市清单

}

export default base;