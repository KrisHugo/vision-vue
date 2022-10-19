
<script lang="ts">

import { defineComponent, ref } from 'vue'
import LeftSide from '@/components/forum/LeftSide.vue'
import Main from '@/components/forum/Main.vue'
import RightSide from '@/components/forum/RightSide.vue'
import { dataOfPosts } from '@/components/forum/stores/posts'
import type { post, filter} from '@/components/forum/stores/posts'
export default defineComponent({
  name: 'Forum',
  components: { LeftSide, Main, RightSide },
  props: {
    message: String
  },
  data() {
    return {
      defaultList: ref(dataOfPosts()),
      count: 0,
      keyword: '',
      selectedPosts: ref([] as post[]), 
      search: {keyword:'', categories:0, topics:0, order:0} as filter
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    mounted() {
      console.log(`The count is ${this.count}.`);
    },
    getPosts() {
      var _search = this.keyword;
      var reg = new RegExp(_search, 'ig');// 不区分大小写
      if (_search) {
        return this.defaultList.filter(
          function (item) {
          if ((item.id.toString().indexOf(_search) != -1) || item.name.match(reg) || (item.id.toString().indexOf(_search) != -1)) {
            return item;
          }
        });
      }
    }
  },
  watch: {
  },
  mounted() {
    // this.keyword = this.$refs.selected.keyword
  }

})

</script>

<template>
  <div class="about">
    <!-- <button @click="increment">
        Count is {{ count }}
      </button> -->
    <LeftSide ref="selected"></LeftSide>
    <Main :selectedPosts="selectedPosts"></Main>
    <RightSide></RightSide>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.about {
  box-sizing: border-box;
  display: flex;
}

form {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

input,
button {
  border: none;
  outline: none;
}

input {
  width: 90%;
  height: 42px;
  padding-left: 13px;
}

button {
  cursor: pointer;
}
</style>
