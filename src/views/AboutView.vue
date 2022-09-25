
<script lang="ts">

import { defineComponent } from 'vue'
import LeftSide from '../components/forum/LeftSide.vue'
import Main from '../components/forum/Main.vue'
import RightSide from '../components/forum/RightSide.vue'

export default defineComponent({
  props: {
    message: String
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    mounted() {
      console.log(`The count is ${this.count}.`);
    }
  },
  components: { LeftSide, Main, RightSide }
})

</script>

<template>
  <div class="about">
    <!-- <button @click="increment">
        Count is {{ count }}
      </button> -->
      <LeftSide></LeftSide>
      <Main></Main>
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
