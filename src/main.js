import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './app/routes'
import '@/app/styles/index.css'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
