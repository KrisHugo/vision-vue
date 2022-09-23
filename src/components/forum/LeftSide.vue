<script lang="ts">
import search from '../modules/search.vue';
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 组件名称 from '组件路径';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { search },
    data() {
        //这里存放数据
        return {

        };
    }
}

</script>
<!--  -->
<template>
    <div class="leftSide">
        <div id="container">
            <search />
        </div>
    </div>
</template>


<style lang='css' scoped>
.leftSide {
    padding: 10px 0;
    width: 30%;
    height: auto;
    /* background: grey; */
}

button {
    height: 42px;
    width: 42px;
    position: absolute;
}
</style>