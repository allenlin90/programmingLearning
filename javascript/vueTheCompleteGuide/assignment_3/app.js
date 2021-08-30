const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.number = 0;
            }, 1500);
        }
    },
    computed: {
        result() {
            if (this.number > 37) {
                return 'Too much';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Not there yet';
            }
        }
    },
    methods: {
        add(num = 1) {
            this.number += num;
            console.log(this.number);
        }
    }
});

app.mount('#assignment');