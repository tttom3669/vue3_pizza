import { createApp } from 'vue';
// axios、 vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 自定義 bootstrap
import './assets/all.scss';
// Vue loading 插件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// Pinia
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.component('VueLoading', Loading); // 全域元件
app.mount('#app');
