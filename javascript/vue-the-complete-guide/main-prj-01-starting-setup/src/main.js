import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './app.vue';

import BaseCard from './components/ui/base-card.vue';
import BaseButton from './components/ui/base-button.vue';
import BaseBadge from './components/ui/base-badge.vue';
import BaseSpinner from './components/ui/base-spinner.vue';
import BaseDialog from './components/ui/base-dialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
