<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const userName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31
    // });

    const userName = computed(function() {
      return `${firstName.value} ${lastName.value}`;
    });

    userName.value; // readonly ref object created with computed

    function setNewData() {
      age.value += 1;
    }

    return {
      // user,
      userName,
      age,
      setAge: setNewData,
      firstName,
      lastName
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
