<script>
export default {
    name:'Content',
    props:{
        pans:{
            type:Array,
            defautl: () => {
                return []
            }
        }
    },
    render(){
        return (
            <div>
                {
                    this.pans.map((ele, index) => {
                        // 若为true 显示自己部分的内容，若为false什么都不显示
                        // return ele.isActive? ele.$slots.default: ''
                        return <div style={{ display:ele.isActive ? 'block' : 'none'}}>{ ele.$slots.default }</div>
                    })
                }
            </div>
        )
    }
}
</script>

<style>

</style>