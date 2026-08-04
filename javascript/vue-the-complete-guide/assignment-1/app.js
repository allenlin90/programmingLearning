const app = Vue.createApp({
    data() {
        return {
            name: 'John Doe',
            age: 20,
            imgLink: 'https://images.unsplash.com/photo-1618972078577-80ad6b66fd72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        };
    },
    methods: {
        randomNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');