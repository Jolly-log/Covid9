<template>
  <div class='info'>
    <p class='title'>
        <i></i>
        病毒信息
    </p>
    <div class='content'>
        <p>文本</p>
    </div>


  </div>
</template>

<script>
import api from '../api'

export default {
    mounted(){
        api.getNcov({
            key: 'e17ab631de4cbb1cac8eb4a1dc853c6c'
        }).then(res => {
            console.log('res then已经被调用了')
            consoel.log(res)
        }).catch(err => {
            console.log('res err已经被调用了')
            console.log(err)
        })
        
    }
}
</script>

<style>
.info {
    padding: 0.16rem;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
}

.title {
    font-size: 0.17rem;
    text-align: left;
}

.title i {
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    vertical-align: middle;
    background-color: #4169e2;
}

.content {
    padding: 0.06rem 0.16rem;
}

.content p {
    font-size: 13px;
    margin:5px 0;
}
</style>