import axios from '../utils/request'
import base from './base'

const api = {
    // 疫情详情数据：
    getNcov(params){
        return axios.get(base.baseUrl + base.ncov, {
            params
        })
    },
    // 中国各省市疫情数据：
    getProvinceNcov(){
        return axios.get('http://iwenwiki.com/wapicovid19/all.php')
    },

    // 世界各国疫情数据：
    getWorldNcov(){
        return axios.get(base.baseLogin + base.worldNcov)
    },

    // 省市疫情数据：
    getCityNcov(params){
        return axios.get(base.baseLogin + base.cityNcov, {
            params
        })
    },

    // 城市数据：
    getCitys(params){
        return axios.get(base.baseLogin + base.citys,{
            params
        })
    }
}

export default api;