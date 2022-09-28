<script lang="ts">
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 组件名称 from '组件路径';
import { createApp } from 'vue'


export default {
    // components: {},
    data() {
        //这里存放数据
        return {
            orders:[
                { id: 0, name:"Lastest"},
                { id: 1, name:"Popular"},
                { id: 2, name:"Oldest"},
            ],
            categories: [
                { id: 1, name: "PC", post: 100},
                { id: 2, name: "Andriod", post: 100},
                { id: 3, name: "Website", post: 100},
                { id: 4, name: "Game-Console", post: 100},
                { id: 5, name: "IOS", post: 100},
            ], 
            topics: [
                { id: 1, name: "bugs", post: 30},
                { id: 2, name: "memes", post: 10},
                { id: 3, name: "dev-logs", post: 50},
                { id: 4, name: "games", post: 600},
            ], 
            
            search: {
                keyword: '',
                order: 0,
                categories: 0,
                topics: 0,
            },
        };
    },
    // //监听属性 类似于data概念
    // computed: {},
    // //监控data中的数据变化
    // watch: {},
    // //方法集合
    // methods: {

    // },
    // //生命周期 - 创建完成(可以访问当前this实例)
    // created() {

    // },
    // //生命周期 - 挂载完成(可以访问DOM元素)
    // mounted() {

    // },
    // beforeCreate() { }, //生命周期 - 创建之前
    // beforeMount() { }, //生命周期 - 挂载之前
    // beforeUpdate() { }, //生命周期 - 更新之前
    // updated() { }, //生命周期 - 更新之后
    // beforeDestroy() { }, //生命周期 - 销毁之前
    // destroyed() { }, //生命周期 - 销毁完成
    // activated() { }, //如果页面有keep-alive缓存功能,这个函数会触发
}
</script>
    

<!--  -->
<template>
    <div class='searchBar'>
        <form>
            <input type="text" v-model="keyword" placeholder="search...">
            <button type="submit"></button>
        </form>
    </div>
    <div id="order" class="order">
        <button v-for="(k,index) in orders" :key="k.id" type="button" @click="search.order = k.id" :value="k.id" :class="[search.order == k.id?'selected':'']">{{k.name}}</button>
    </div>
    <div class="filter">
        <div id="Categories">
            <span>Categories ({{categories.length}})</span>
            <input type="checkbox" id="CategoryCheck" checked name="collapse" class="collapse-toggle" />
            <label style="display: inline-block;" for="CategoryCheck">
                <img class="not-show" style="width: 20px;height: 20px;" src="@/assets/tab-collapse.svg">
                <img class="show" style="width: 20px;height: 20px;" src="@/assets/tab-toggle.svg">
            </label>
            <div id="CategoriesList" class="content">
                <ul>
                    <li v-for="(k,index) in categories" :key="k.id">
                        <input type="radio" :id="k.id" name="categories" :value="k.id" />
                        <label :for="k.id">{{k.name}} Hot:{{k.post}}</label>
                    </li>
                </ul>
            </div>
        </div>
        <div id="Topics">
            <span>Topics ({{topics.length}})</span>
            <input type="checkbox" id="TopicCheck" checked name="collapse" class="collapse-toggle" />
            <label style="display: inline-block;" for="TopicCheck">
                <img class="not-show" style="width: 20px;height: 20px;" src="@/assets/tab-collapse.svg">
                <img class="show" style="width: 20px;height: 20px;" src="@/assets/tab-toggle.svg">
            </label>
            <div id="TopicsLists" class="content">
                <ul>
                    <li v-for="(k,index) in topics" :key="k.id">
                        <input type="radio" :id="k.id" name="topic" :value="k.id" />
                        <label :for="k.id">{{k.name}} Hot:{{k.post}}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.order {
    width: 100%;
    margin: 1rem 0;
    padding: 0 5%;
    display: inline-block;
}

.subtle {
    width: 100%;
    font: 1rem;
    opacity: 0.5;
    font-weight: bold;
    float: left;
}

.order button {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-top: 1%;
    padding: 3% 5% 0 5%;
    font-size: 110%;
    letter-spacing: 1px;
    text-align: left;
    background-color: rgb(61, 90, 241, 0);
    font-weight: bold;


}

.order button.selected {
    margin-top: 5%;
    padding: 8% 10%;

    letter-spacing: 2px;
    color: rgb(244, 245, 250);
    text-align: center;
    font-weight: normal;

    background-color: rgb(61, 90, 241);

    text-shadow: 1px 1px 1px rgba(255, 255, 255, .22);

    border-radius: 1rem;

    box-shadow: 1px 1px 1px rgba(0, 0, 0, .29), inset 1px 1px 1px rgba(255, 255, 255, .44);

    transition: all 0.15s ease;
}

.searchBar {
    display: inline-block;
    padding: 1.5rem 5%;
    width: 100%;
    /* background: #7BA7AB; */
}

.searchBar form {
    height: 42px;
    width: auto;
    width: 90%;
}

.searchBar input {
    left: 10%;
    width: 80%;
    font-size: 0.8rem;
    border: 2px solid #324B4E;
    border-radius: 0.5rem;
    background-color: transparent;
    transition: .15s linear;
    float: left;
    padding-left: 25px;
}

.searchBar input:focus {
    left: 0%;
    width: 100%;
}

.searchBar input+button {
    position: absolute;
    background: none;
    top: 0;
    left: 11%;
    height: 100%;
    transition: .15s linear;
}

.searchBar input:focus+button[type='submit'] {
    left: 1%;
}


.searchBar button[type='submit']::before {
    content: "\f002";
    font-family: FontAwesome;
    color: #324b4e;
}

.filter {
    width: 100%;
    display: inline-block;
    padding: 0 10%;

}

.filter span {
    font-size: 120%;
    font-weight: bold;
}

.collapse-toggle {
    display: none;
}

.content {
    max-height: 0px;
    overflow: hidden;
    transition: all .38s;
}

.content ul {
    padding: 0;
    margin: 0;
}

.content li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
}

.content li input[type=radio]{
    display: contents;
    appearance: none;
    text-decoration: none;
    color: #000;
}

.content li label{
    /* z-index: -1; */
}

.collapse-toggle:checked~.content {
    max-height: 250px;
}

.collapse-toggle~label img{
    
    vertical-align: middle;
    margin-top: -2px;
    margin-bottom: 1px;
}
.collapse-toggle:checked~label .show {
    display: none;
    /* transform: rotateY(180deg); */
    /* transition: 0.3ms linear; */
}

.collapse-toggle:not(:checked)~label .not-show {
    display: none;
    /* transition: 0.3ms linear; */
}

.collapse-item {
    margin: 10px;
    border-radius: 10px
}
</style>