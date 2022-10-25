<script>
export default {
    name:'Tab',
    props:{
        label:{
            type:String,
            default:'tab'
        },
        index:{
            type:[String, Number],
            default:1
        }
    },
    computed:{
        isActive(){
            return this.$parent.currentIndex == this.index 
        }
    },
    methods:{
        clickItemHandle(){
            // 事件回调传递数据给父级组件, 其实是 $parent
            this.$parent.getIndex(this.index)
        }
    },
    mounted(){
        this.$parent.pans.push(this)
    },
    render(){
        let classNames = {
            tab:true,  // tab类的样式一定会有
            active:this.isActive  // active样式需要才高亮
        }
        console.log(this.isActive, this.index, this.$parent.currentIndex, classNames)
        return(
            // tab子级页面中的内容
            <li onClick={ this.clickItemHandle } class={ classNames }>{ this.label }</li>
        )
    }
}
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>