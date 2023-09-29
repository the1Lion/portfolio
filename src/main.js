import {createApp} from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from "./router";
import * as constants from './helpers/constants.js';


const app = createApp(App)

const defineConstants = {
    install(app) {
        // when we use $ we can then call the constants
        Object.defineProperties(app.config.globalProperties, {
            $constants: {
                value: constants,
            }
        });
    },
}

app.use(router)
app.use(defineConstants)
app.mount('#app');