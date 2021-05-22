<template>
    <button v-if="!isAuth" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
    <p>{{ isTestAuth }}</p>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login');
        },
        logout() {
            this.$store.dispatch('logout');
        }
    },
    computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated;
        },
        isTestAuth() {
            console.log(this.$store.getters);
            return this.$store.getters['numbers/testAuth'];
        }
    }
}
</script>