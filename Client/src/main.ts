import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
import SimpleTypeahead from 'vue3-simple-typeahead';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS


createApp(App)
    .use(router)
    .use(createPinia())
    .use(SimpleTypeahead)
    .mount('#app')
