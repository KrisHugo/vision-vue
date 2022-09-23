
<script lang="ts">

import { defineComponent } from 'vue'
import LeftSide from '../components/forum/LeftSide.vue'

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
  components: { LeftSide }
})

</script>

<template>
  <div class="about">
      <!-- <button @click="increment">
        Count is {{ count }}
      </button> -->
      <LeftSide></LeftSide>
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
