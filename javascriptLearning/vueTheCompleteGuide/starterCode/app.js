const app = Vue.createApp({
    data() { // must return an object
        return { // key/value pair can be named arbitrarily
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');