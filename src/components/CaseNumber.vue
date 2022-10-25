<template>
  <div class='casenumber'>
    <div class='container'>
        <span>截至至 {{ formatDate(caseNum.modifyTime) }} 全国数据统计</span>
    </div>
    <div class='num'>
        <ul class='count'>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>{{numZore(caseNum.currentConfirmedIncr)}}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{ caseNum.currentConfirmedCount }}</strong>
                <span>现存确诊</span>
            </li>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>+{{caseNum.confirmedIncr }}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{ caseNum.confirmedCount }}</strong>
                <span>累计确诊</span>
            </li>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>+{{ caseNum.suspectedIncr }}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{  caseNum.suspectedCount }}</strong>
                <span>累计境外输入</span>
            </li>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>+{{ caseNum.curedIncr }}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{ caseNum.curedCount }}</strong>
                <span>累计治愈</span>
            </li>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>+{{ caseNum.deadIncr }}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{ caseNum.deadCount }}</strong>
                <span>累计死亡</span>
            </li>
            <li class='create-item'>
                <div class='create-count'>
                    <b>较昨日 <em style='color:rgb(247,76,49)'>{{ numZore(caseNum.seriousIncr) }}</em></b>
                </div>
                <strong style='color:rgb(247,76,49)'>{{ caseNum.seriousCount }}</strong>
                <span>现存无症状</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
    data(){
        return {
            caseNum:{}
        }
    },
    mounted(){
        api.getNcov({
            key:'e17ab631de4cbb1cac8eb4a1dc853c6c'
        })
        .then((res) => {
            this.caseNum = {
                // 更新时间戳`
                modifyTime:res.data.newslist[0].desc.modifyTime,
                // 现存确诊人数
                currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount,
                // 累计确诊人数
                confirmedCount:res.data.newslist[0].desc.confirmedCount,
                // 累计境外输入人数
                suspectedCount:res.data.newslist[0].desc.suspectedCount,
                // 累计治愈人数
                curedCount:res.data.newslist[0].desc.curedCount,
                // 累计死亡人数
                deadCount:res.data.newslist[0].desc.deadCount,
                // 现存无症状人数
                seriousCount:res.data.newslist[0].desc.seriousCount,
                // 新增境外输入人数
                suspectedIncr:res.data.newslist[0].desc.suspectedIncr,
                // 相比昨天现存确诊人数
                currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr,
                // 相比昨天累计确诊人数
                confirmedIncr:res.data.newslist[0].desc.confirmedIncr,
                // 相比昨天新增治愈人数
                curedIncr:res.data.newslist[0].desc.curedIncr,
                // 相比昨天新增死亡人数
                deadIncr:res.data.newslist[0].desc.deadIncr,
                // 相比昨天现存无症状人数
                seriousIncr:res.data.newslist[0].desc.seriousIncr
            }
        }).catch((error) => {
            console.log('caseNumber中的错误是：', error)
        })
    },
    methods:{
        formatDate(date){
            var date = new Date(date);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1) < 10? '0' + (date.getMonth() + 1) + '-': date.getMonth() + 1 + '-';
            var DD = date.getDate() < 10? '0' + date.getDate() + '   ': date.getDate() + '   ';
            var hh = date.getHours() < 10? '0' + date.getHours() + ':':  date.getHours() + ':';
            var mm = date.getMinutes() < 10? '0' + date.getMinutes(): date.getMinutes();

            return YY + MM + DD + hh + mm
        
        },
        numZore(num){
            return num >= 0? '+' + num: num;
        }
    },
}
</script>

<style scoped>
.case-num {
    padding:0.16rem;
    background-color: #fff;
}

.container {
    margin:0.16rem 0 0;
    font-size:0.12rem;
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0 0.07rem;
    line-height: 0.24rem;
}

.title em {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.24rem;
    margin-right: -0.16rem;
    padding: 0 0.08rem;
    color: #666;
    font-style: normal;
    background-color: #f7f7f7;
    border-radius: 0.12rem 0 0 0.12rem;
}
.title em img {
    width: 0.123rem;
    height: 0.123rem;
    margin-right: 0.037rem;
}
.num {
    position: relative;
    text-align: center;
    background: #fff;
}
.num::after {
    position: absolute;
    top: -0.01rem;
    left: -0.01rem;
    display: block;
    width: 200%;
    height: 200%;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
    transform: scale(0.5);
    transform-origin: 0 0;
    content: "";
}
.num ul {
    flex-flow: wrap;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.08rem 0 0.12rem;
}
.num ul li {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 33.3333333%;
    margin: 10px 0;
}
.num ul li .create-item {
    position: relative;
    text-align: center;
}
.num ul li .create-item .create-count {
    display: flex;
    align-items: center;
    height: 0.12rem;
    margin-bottom: 0.02rem;
    color: #666;
    font-weight: 400;
    font-size: 0.09rem;
}
.num ul li .create-item .create-count em {
    font-weight: 400;
    font-style: normal;
}
.num ul li strong {
    margin-bottom: 0.01rem;
    font-weight: 700;
    font-size: 0.2rem;
    line-height: 0.25rem;
}
.num ul li span {
    display: block;
    color: #333;
    font-weight: 700;
    font-size: 0.11rem;
    line-height: 0.15rem;
}
</style>