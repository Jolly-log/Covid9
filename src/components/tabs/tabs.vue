<script>
import Content from './content.vue'
export default {
    name:'Tabs',
    component:{
        Content
    },
    props:{
        currentIndex:{
            type:[String, Number],
            default:1
        }
    },
    data(){
        return {
            pans:[], // 所有内容部分的容器
        }
    },
    methods:{
        getIndex(index){
            this.$emit('onIndex', index)
        }
    },
    render(){
        return(
            <div>
                <ul class='tabs-header'>{ this.$slots.default }</ul>
                <Content pans={ this.pans }/>
            </div>
        )
    }
}
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>>

</style>