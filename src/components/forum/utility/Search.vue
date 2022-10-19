<script lang="ts">
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 组件名称 from '组件路径';

export default {
    // components: {},
    data() {
        //这里存放数据
        return {
            orders: [
                { id: 0, name: "Lastest" },
                { id: 1, name: "Popular" },
                { id: 2, name: "Oldest" },
            ],
            categories: [
                { id: 1, name: "PC", post: 100 },
                { id: 2, name: "Andriod", post: 100 },
                { id: 3, name: "Website", post: 100 },
                { id: 4, name: "Game-Console", post: 100 },
                { id: 5, name: "IOS", post: 100 },
            ],
            topics: [
                { id: 1, name: "bugs", post: 30 },
                { id: 2, name: "memes", post: 10 },
                { id: 3, name: "dev-logs", post: 50 },
                { id: 4, name: "games", post: 600 },
            ],
        };
    },
    // //监听属性 类似于data概念
    // computed: {},
    // //监控data中的数据变化
    watch: {
    },
    // //方法集合
    methods: {
        // 数值变动触发，更新数据至父级，父级进行修改
        onSearchChange(){
            //如何联动父元素呢?
        }
    },
    // //生命周期 - 创建完成(可以访问当前this实例)
    // created() {

    // },
    //生命周期 - 挂载完成(可以访问DOM元素)
    mounted() {
        // 
    },
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
            <input type="text" v-model="search.keyword" placeholder="search...">
            <button type="submit"></button>
        </form>
    </div>
    <div id="order" class="order">
        <button v-for="(k,index) in orders" :key="k.id" type="button" @click="search.order = k.id" :value="k.id"
            :class="[search.order == k.id?'selected':'']">{{k.name}}</button>
    </div>
    <div class="filters">
        <div class="filter" id="Categories">
            <input type="checkbox" id="CategoryCheck" checked name="collapse" class="collapse-toggle" />
            <label style="display: inline-block;" for="CategoryCheck">

                <span>Categories ({{categories.length}})</span>
                <img class="not-show" style="width: 20px;height: 20px;" src="@/assets/tab-collapse.svg">
                <img class="show" style="width: 20px;height: 20px;" src="@/assets/tab-toggle.svg">
            </label>
            <div id="CategoriesList" class="content">
                <ul>
                    <li v-for="(k,index) in categories" :key="k.id">
                        <input type="radio" :id="'category'+k.id" name="categories" :value="k.id" @click="search.categories = k.id" />
                        <label :for="'category'+k.id">{{k.name}}</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="filter" id="Topics">
            <input type="checkbox" id="TopicCheck" checked name="collapse" class="collapse-toggle" />
            <label style="display: inline-block;" for="TopicCheck">
                <span>Topics ({{topics.length}})</span>
                <img class="not-show" style="width: 20px;height: 20px;" src="@/assets/tab-collapse.svg">
                <img class="show" style="width: 20px;height: 20px;" src="@/assets/tab-toggle.svg">
            </label>
            <div id="TopicsLists" class="content">
                <ul>
                    <li v-for="(k,index) in topics" :key="k.id">
                        <input type="radio" :id="'topic'+k.id" name="topic" :value="k.id"  @click="search.topics = k.id" />
                        <label :for="'topic'+k.id">{{k.name}}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>

.searchBar {
    display: inline-block;
    margin-top: 5%;
    padding: 1.5rem 5% 0 5%;
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
    font-size: 1rem;
    border: 2px solid #324B4E;
    border-radius: 1.5rem;
    background-color: transparent;
    transition: .15s ease-in-out;
    float: left;
    padding: 3% 1rem 3% 2.1rem;
}

.searchBar input:focus {
    left: 0%;
    width: 100%;
}

.searchBar input~button {
    position: absolute;
    background: none;
    top: 0;
    left: 2.4rem;
    height: 100%;
    transition: .15s ease-in-out;
}

.searchBar input:focus+button[type='submit'] {
    left: 3%;
}


.searchBar button[type='submit']::before {
    content: "\f002";
    font-family: FontAwesome;
    color: #324b4e;
}
.order {
    width: 100%;
    margin-top: 1rem;
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
    margin-top: 2%;
    padding: 3% 5% 0 5%;
    font-size: 120%;
    letter-spacing: 1px;
    text-align: left;
    background-color: rgb(61, 90, 241, 0);
    font-weight: bold;

    transition: all 0.45s ease-in-out;
}

.order button.selected {
    margin-top: 5%;
    padding: 5% 10%;

    letter-spacing: 2px;
    color: var(--main-grey-color);
    text-align: center;
    font-weight: normal;

    background-color: var(--main-blue-color);

    text-shadow: 1px 1px 1px rgba(255, 255, 255, .22);

    border-radius: 1rem;

    box-shadow: 1px 1px 1px rgba(0, 0, 0, .29), inset 1px 1px 1px rgba(255, 255, 255, .44);

    /* transition: all 0.45s ease; */
}

.filters {
    width: 100%;
    display: inline-block;
    padding: 0 10%;

    margin-top: 2rem;
}

.filter{
    margin-bottom: 20px;
}

.filter span {
    font-size: 1.5rem;
    font-weight: bold;
}

.collapse-toggle {
    display: none;
}

.collapse-toggle:checked~.content {
    max-height: 300px;
}

.collapse-toggle~label img {
    vertical-align: middle;
    margin-top: -5%;
    margin-bottom: 1px;
    margin-left: 10px;
}

.collapse-toggle:checked~label .show {
    display: none;
}

.collapse-toggle:not(:checked)~label .not-show {
    display: none;
}

.collapse-item {
    margin: 10px;
    border-radius: 10px
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
    z-index: 1;
}

.content li>input[type=radio] {
    display: none;
    appearance: none;
    text-decoration: none;
    color: #000;
    width: 0;
    height: 0;
    opacity: 0;
}

.content li>input[type=radio]+label {
    border-radius: 10px;
    transition: all 0.5ms linear;
}
.content li>input[type=radio]~label {
    display: inline-block;
    width: 100%;
    height: auto;
    padding: 0.5rem 1rem ;
    transition: all 0.3s linear;
    background-color: rgb(255, 255, 255, 0);
    font-weight: bold;

}

.content li>input[type=radio]+label:hover {
    cursor: pointer;
}

.content li>input[type=radio]:checked+label {
    /* z-index: -1; */
    background-color: rgb(255, 255, 255, 1);
}
</style>