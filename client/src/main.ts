import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Login from './pages/Login.vue'
import Success from './pages/Success.vue'

const routes = [
  { path: '/', component: Login, name: 'login' },
  { path: '/success', component: Success, name: 'success' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const hankoApi = ref(import.meta.env.VITE_HANKO_API_URL)

const app = createApp(App)

app.provide('hankoApi', hankoApi)
app.use(router)
app.mount('#app')
