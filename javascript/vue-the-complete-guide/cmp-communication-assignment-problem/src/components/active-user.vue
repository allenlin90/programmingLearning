<template>
    <div>
        <h2>{{ username }}</h2>
        <h3 v-if="userAge">{{ userAge }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true, 
        },
        userAge: {
            type: Number,
            requried: true,
        },
    }
}
</script>

<style scoped>

</style>