import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import first from './components/first.vue'
import {createWebHashHistory, createRouter} from "vue-router"

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: first}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
