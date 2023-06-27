import { createApp } from "vue"
import "./style.sass"
import App from "./App.vue"
import router from './router/index.js'
//使用 use(router)，設定欲使用這個路由檔。
createApp(App).use(router).mount("#app")
