const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            output: 'OUTPUT',
            enterOutput: 'OUTPUT',
        }
    },
    methods: {
        makeAlert() {
            alert('ALERT!');
        },
        register(event) {
            this.userInput = event.target.value;
            this.output = event.target.value;
        },
        renderOutput() {
            this.enterOutput = this.userInput;
        }
    }
});

app.mount('#assignment');