<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // },
        // ...mapActions(['increase', 'increment']),
        ...mapActions('numbers', {
            inc: 'increment',
            increase: 'increase',
        }),
    }
}
</script>