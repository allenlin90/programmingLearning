<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const userName = ref('Maximilian');
    const age = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31
    // });

    function setNewData() {
      age.value += 1;
    }

    return {
      // user,
      userName,
      age,
      setAge: setNewData
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
