import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*
Font Awesome CSS
**/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(store).use(router).use(router).mount('#app')
