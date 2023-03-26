import { createApp } from 'vue';
// axios、 vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// 自定義 bootstrap scss
import './assets/all.scss';
// bootstrap js
import 'bootstrap';
// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Vue loading 插件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// Pinia
import { createPinia } from 'pinia';
// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// VeeValidate 語系
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 加入 CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

import router from './router';
import App from './App.vue';
// filters
import { date, currency } from './methods/filters';

const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
};

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

app.use(VueAxios, axios);
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(CKEditor);

app.component('VueLoading', Loading); // 全域元件
app.mount('#app');
