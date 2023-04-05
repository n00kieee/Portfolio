import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './plugins/font-awesome';

import 'aos/dist/aos.css'


createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
