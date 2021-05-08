<template>
    <section>
        <user-data @activate-user="getUser"></user-data>
        <active-user
            :username="username"
            :user-age="userAge"
        ></active-user>
    </section>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            userAge: 0,    
        }
    },
    methods: {
        getUser(name, age) {
            this.username = name;
            this.userAge = parseInt(age);
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    width: 100%;
    height: 100%;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
}

#app form {
    width: 80%;
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>