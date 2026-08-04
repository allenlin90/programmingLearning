import { createApp } from 'vue';

import router from './router.js';
import App from './app.vue';
import store from './store/index.js';
import BaseBadge from './components/ui/base-badge.vue';

const app = createApp(App)

app.use(router);

app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
