const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        setName(event, lastname) {
            this.name = `${event.target.value} ${lastname}`
        },
        add(event, num = 1) {
            console.log(num);
            this.counter += num;
        },
        reduce(event, num = 1) {
            this.counter -= num;
        },
        submitForm(event) {
            event.preventDefault();
        }
    }
});

app.mount('#events');
