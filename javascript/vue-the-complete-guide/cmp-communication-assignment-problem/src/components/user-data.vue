<template>
    <form action="" @submit.prevent="activateUser">
        <div>
            <label for="username">User Name</label>
            <input type="text" id="username" v-model="username">
        </div>
        <div>
            <label for="user_age">User Age</label>
            <input type="text" id="user_age" v-model="userAge">
        </div>
        <button>submit</button>
    </form>
</template>

<script>
export default {
    emits: ['activate-user'],
    data() {
        return {
            username: '',
            userAge: 0
        }
    },
    methods: {
        activateUser() {
            this.$emit('activate-user', this.username, this.userAge);
        }
    }
}
</script>