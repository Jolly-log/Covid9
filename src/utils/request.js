import axios from 'axios'
import qs from 'qs'

// 错误原因：
const errorHandle = (status,info) => {
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

// 创建对象：
const instance = axios.create({
    // baseURL:'/api',
    timeout: 5000,
})

// 请求拦截：
instance.interceptors.request.use(
    config => {
        if(config.method === 'post'){
            config.data = qs.stringify(config.data)
        }

        return config
    },
    error => {
        Promise.reject('请求拦截中的错误：', error)
    }
)

// 响应拦截：
instance.interceptors.response.use(
    response => response.status === 200? Promise.resolve(response): Promise.resolve(response),
    error => {
        const { response } = error;
        errorHandle(response.status,response.info)
    }
)

export default instance