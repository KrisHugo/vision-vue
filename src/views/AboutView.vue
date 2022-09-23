
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
    <div>
      <!-- <button @click="increment">
        Count is {{ count }}
      </button> -->
      <LeftSide></LeftSide>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

input,
button {
  border: none;
  outline: none;
}

input {
  width: 100%;
  height: 42px;
  padding-left: 13px;
}

button {
  cursor: pointer;
}
</style>
