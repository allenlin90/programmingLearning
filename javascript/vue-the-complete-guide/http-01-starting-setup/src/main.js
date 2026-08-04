import { createApp } from 'vue';

import BaseCard from './components/ui/base-card.vue';
import BaseButton from './components/ui/base-button.vue';
import App from './app.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
