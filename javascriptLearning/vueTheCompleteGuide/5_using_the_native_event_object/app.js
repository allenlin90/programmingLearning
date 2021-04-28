const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    }
    // name(value) { //this is connect to this.name in data
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(newValue, oldValue) {
    //   if (newValue === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + newValue;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputfullname() {
      console.log('Running');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'lastName';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num = 1) {
      console.log('Running Add');
      this.counter = this.counter + num;
    },
    reduce(num = 1) {
      console.log('Running Substract');
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
