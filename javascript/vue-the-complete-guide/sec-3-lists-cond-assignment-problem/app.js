const app = Vue.createApp({
    data() {
        return {
            show: true,
            // btnText: 'Hide',
            task: '',
            tasks: []
        }
    },
    watch: {
        show(value) {
            if (value) {
                this.btnText = 'Hide';
            } else {
                this.btnText = 'Show';
            }
        }
    },
    computed: {
        btnText() {
            if (this.show) {
                return 'Hide';
            }
            return 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
        },
        toggleList() {
            this.show = !this.show;
        },
        removeItem(index) {
            this.tasks.splice(index, 1);
        }
    }
});

app.mount('#assignment');