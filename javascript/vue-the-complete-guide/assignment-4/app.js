const app = Vue.createApp({
    data() {
        return {
            show: true,
            visibleClass: null,
            inputBackgroundColor: '',
            textColor: null,
            inputClass: '',
        }
    },
    watch: {
        show(value) {
            this.visibleClass = {
                visible: value,
                hidden: !value
            }
        },
    },
    computed: {
        userClass() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.show,
                hidden: !this.show,
            }
        },
    },
    methods: {
        toggleParagraph() {
            this.show = !this.show;
        },
        changeColor(event) {
            if (event.target.value) {
                this.textColor = {
                    color: event.target.value
                }
            }
        }
    }
});

app.mount('#assignment');