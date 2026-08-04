import { createApp } from 'vue';

import App from './app.vue';
import ActiveElement from './components/active-element.vue';
import KnowledgeBase from './components/knowledge-base.vue';
import KnowledgeElement from './components/knowledge-element.vue';
import KnowledgeGrid from './components/knowledge-grid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount('#app');
