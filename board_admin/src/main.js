import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';

// npm install vue-router
// npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// createApp(App).mount('#app');
createApp(App).use(router).mount('#app');
