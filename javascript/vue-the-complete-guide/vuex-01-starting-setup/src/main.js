import { createApp } from 'vue';


import App from './app.vue';
import store from './store/index.js';

const app = createApp(App);

app.use(store);

app.mount('#app');
