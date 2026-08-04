import { createApp } from 'vue';

import App from './app.vue';
import BaseBadge from './components/ui/base-badge.vue';
import BaseCard from './components/ui/base-card.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
