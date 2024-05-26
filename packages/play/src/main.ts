import { createApp } from 'vue'

// @ts-ignore
import App from './App.vue'

import XSElement from "xs-element"

createApp(App)
    .use(XSElement)
    .mount('#app')
