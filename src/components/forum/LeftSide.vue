<script lang="ts">
import Search from "./utility/Search.vue";
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 组件名称 from '组件路径';

export default {
    //import引入的组件需要注入到对象中才能使用
    data() {
        //这里存放数据
        return {};
    },
    components: { Search }
}

</script>
<!--  -->
<template>
    <div class="leftSide">
        <div id="container">
            <Search/>
        </div>
    </div>
</template>


<style lang='css' scoped>
.leftSide {
    margin-left: 3%;
    
    padding: 10px 0;
    width: 20%;
    height: auto;
    background: var(--main-grey-color);
    opacity: 0.9;
    /* background: grey; */
    min-height: 1024px;
    border-radius: 30px;
    
}

button {
    height: 42px;
    width: 42px;
    position: absolute;
}
</style>