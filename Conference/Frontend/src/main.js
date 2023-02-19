import {
    createApp
} from "vue";
import {
    createPinia
} from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import i18n from './language';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// import 'vuetify/styles'
// import {
//     createVuetify
// } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//     components,
//     directives,
// })

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(i18n);
// app.use(piniaPluginPersistedstate);
// app.use(vuetify);

app.mount("#app");