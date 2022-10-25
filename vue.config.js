const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 跨域问题：
module.exports = {
  devServer: {
      proxy: {
          '/apied': {
              target: 'http://api.tianapi.com',  // /api代表了后面的地址
              changeOrigin: true, // 开启代理
              pathRewrite:{ // 路径重写
                  "^/apied":""
              }
          },
          '/login': {
            target: 'http://iwenwiki.com', 
            changeOrigin: true, 
            pathRewrite:{ 
                "^/login":""
            },
            '/juhe':{
              target:'http://apis.juhe.cn',
              changeOrigin: true, 
            pathRewrite:{ 
                "^/juhe":""
            },
            }
        }
      }
  }
}