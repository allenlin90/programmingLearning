import { createApp } from 'vue';
import App from './app.vue';
import FriendContact from './components/friend-contact.vue';
import NewFriend from './components/new-friend.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
