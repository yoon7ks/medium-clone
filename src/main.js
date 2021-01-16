import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import vuex from "vuex";
import { store } from './store/index.js'
import './assets/main.css';


createApp(App).use(router).use(store).use(vuex).mount('#app')
