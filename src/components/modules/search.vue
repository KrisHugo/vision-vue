
<script lang="ts">
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 组件名称 from '组件路径';

export default {
    components: {},
    data() {
        //这里存放数据
        return {
            input: ""
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成(可以访问当前this实例)
    created() {

    },
    //生命周期 - 挂载完成(可以访问DOM元素)
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能,这个函数会触发
}
</script>
    

<!--  -->
<template>
    <div class='searchBar'>
        <form>
            <input type="text" placeholder="search something you like..." />
            <button type="submit"></button>
        </form>
    </div>
</template>

<style lang='css' scoped>
.searchBar {
    padding: 30px 0;
    background: #7BA7AB;
}

.searchBar form {
    height: 42px;
}

.searchBar input {
    width: 20%;
    font-size: 0.8rem;
    border: 2px solid #324B4E;
    background-color: transparent;
    transition: .3s linear;
    float: right;
}

.searchBar input:focus {
    width: 25%;
}

.searchBar button {
    background: none;
    top: -2px;
    right: 0;
}

.searchBar button::before{
    content: "\f002";
    font-family: FontAwesome;
    color: #324b4e;
}
</style>