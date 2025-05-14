import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// Create the app instance
const app = createApp(App);

// Use the router, i18n, and Toast plugins
app.use(router);
app.use(i18n);
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
});

// Mount the app to the DOM
app.mount('#app');

// Scroll to the top after each route change
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
