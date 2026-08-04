import { createApp } from 'vue';
import App from './app.vue';
import BaseCard from './components/ui/base-card.vue';
import BaseButton from './components/ui/base-button.vue';
import BaseDialog from './components/ui/base-dialog.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
