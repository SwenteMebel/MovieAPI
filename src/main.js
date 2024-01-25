import { createApp } from 'vue'
import App from './App.vue'
import './index.css' // verwijst naar de tailwind directory.
import router from '@/router/router' //router
import store from '@/store/index' //store

createApp(App)
.use(store) // store
.use(router) // router
.mount('#app')
