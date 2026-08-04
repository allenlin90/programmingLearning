<template>
  <base-container v-if="isAuthed" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/base-container.vue';
import TheCounter from './components/the-counter.vue';
import ChangeCounter from './components/change-counter.vue';
import FavoriteValue from './components/favorite-value.vue';
import UserAuth from './components/user-auth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
      counter() {
          return this.$store.state.counter;
      },
      isAuthed() {
        return this.$store.getters.userIsAuthenticated;
      }
  },
  methods: {
      addOne() {
        //   this.$store.commit('increase', { value: 10,});
        this.$store.dispatch({ 
            type: 'numbers/increase', 
            value: 10,
        });
      }
  },
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
</style>