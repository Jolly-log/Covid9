import echarts from 'echarts'
import nameMap from './names'

const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts:{
            get(){
                return{
                    chinaMap:function(id){
                        var chartDom = document.getElementById(id);
                          var myChart = echarts.init(chartDom);
                          var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型:点击触发
                                enterable: true,    // 鼠标是否允许滑入悬浮框中
                                formatter(data) {   // 返回一个自定义样式
                                    return `<a href='/#/city/${ data.name }' style='color:#fff'>省:${data.name}<br/>病例:${ data.value }个</a>`
                                }
                            },
                            visualMap:[{  // 左下角标识
                                orient:"vertical",  // 方向：纵向
                                type:"piecewise",   // 显示类型：间断型
                                pieces:[  // 范围匹配类型
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:10,color:"#fdfdcf"},
                                    { min:10,max:100,color:"#fe9e83"},
                                    { min:100,max:1000,color:"#e55a4e"},
                                    { min:1000,max:10000,color:"#4f070d"},
                                ]
                            }],
                            series:[{
                                name:"中国地图",  // 名称
                                type:"map",      // 图形类型
                                map:"china",     // 地图种类中国地图
                                roam:true,       // 是否允许缩放
                                zoom:1.2,        // 放大比例
                                label:{   // 文本、字体信息
                                    normal:{
                                        show:true,  // 是否允许地图显示文字
                                        textStyle:{   // 配置字体样式
                                            fontSize:8  
                                        }
                                    }
                                },
                                itemStyle:{
                                    // 地图的区域颜色，线和区块的颜色
                                    normal:{
                                        areaColor:"rgba(0,255,236,0)",
                                        borderColor:"rgba(0,0,0,0.2)"
                                    },
                                    // 区域颜色与阴影
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },
                                data:[
                                    { name:"内蒙古",value:130},
                                    { name:"新疆",value:12},
                                    { name:"西藏",value:8},
                                    { name:"青海",value:0},
                                ]
                            }]
                          }
                          myChart.setOption(option);
                    },
                    worldMap:function(id, data){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型:点击触发
                                enterable: true,    // 鼠标是否允许滑入悬浮框中
                                formatter(data) {   // 返回一个自定义样式
                                    return `<a href='/#/city/${ data.name }' style='color:#fff'>省:${data.name}<br/>病例:${ data.value }个</a>`
                                }
                            },
                            visualMap:[{  // 左下角标识
                                orient:"vertical",  // 方向：纵向
                                type:"piecewise",   // 显示类型：间断型
                                pieces:[  // 范围匹配类型
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:100,color:"#fdfdcf"},
                                    { min:100,max:10000,color:"#fe9e83"},
                                    { min:10000,max:1000000,color:"#e55a4e"},
                                    { min:1000000,max:100000000,color:"#4f070d"},
                                ]
                            }],
                            series:[{
                                name:"世界地图",  // 名称
                                type:"map",      // 图形类型
                                map:"world",     // 地图种类中国地图
                                roam:true,       // 是否允许缩放
                                zoom:1.2,        // 放大比例
                                label:{   // 文本、字体信息
                                    normal:{
                                        show:false,  // 是否允许地图显示文字
                                        textStyle:{   // 配置字体样式
                                            fontSize:8  
                                        }
                                    }
                                },
                                nameMap:nameMap,
                                itemStyle:{
                                    // 地图的区域颜色，线和区块的颜色
                                    normal:{
                                        areaColor:"rgba(0,255,236,0)",
                                        borderColor:"rgba(0,0,0,0.2)"
                                    },
                                    // 区域颜色与阴影
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },
                                data,
                            }]
                          }
                          myChart.setOption(option);
                      },
                    cityMap:function(id, cityName){
                      var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                          tooltip: {
                              triggerOn: "click", // 事件类型:点击触发
                              enterable: true,    // 鼠标是否允许滑入悬浮框中
                              formatter(data) {   // 返回一个自定义样式
                                  return `<a href='/#/city/${ data.name }' style='color:#fff'>省:${data.name}<br/>病例:${ data.value }个</a>`
                              }
                          },
                          visualMap:[{  // 左下角标识
                              orient:"vertical",  // 方向：纵向
                              type:"piecewise",   // 显示类型：间断型
                              pieces:[  // 范围匹配类型
                                  { min:0,max:0,color:"#fff" },
                                  { min:1,max:10,color:"#fdfdcf"},
                                  { min:10,max:100,color:"#fe9e83"},
                                  { min:100,max:1000,color:"#e55a4e"},
                                  { min:1000,max:10000,color:"#4f070d"},
                              ]
                          }],
                          series:[{
                              name:"省市地图",  // 名称
                              type:"map",      // 图形类型
                              map:cityName,     // 地图种类中国地图
                              roam:true,       // 是否允许缩放
                              zoom:1.2,        // 放大比例
                              label:{   // 文本、字体信息
                                  normal:{
                                      show:true,  // 是否允许地图显示文字
                                      textStyle:{   // 配置字体样式
                                          fontSize:8  
                                      }
                                  }
                              },
                              itemStyle:{
                                  // 地图的区域颜色，线和区块的颜色
                                  normal:{
                                      areaColor:"rgba(0,255,236,0)",
                                      borderColor:"rgba(0,0,0,0.2)"
                                  },
                                  // 区域颜色与阴影
                                  emphasis:{
                                      areaColor:"rgba(255,180,0,0.8)",
                                      shadowOffsetX:0,
                                      shadowOffsetY:0,
                                      shadowBlur:20,
                                      borderWidth:0
                                  }
                              },
                            //   data:[
                            //       { name:"内蒙古",value:130},
                            //       { name:"新疆",value:12},
                            //       { name:"西藏",value:8},
                            //       { name:"青海",value:0},
                            //   ]
                          }]
                        }
                        myChart.setOption(option);
                },  
                }
            }
        }
    })
}

export default install