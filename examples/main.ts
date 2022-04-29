import { createApp } from 'vue'
import App from './App.vue'
import SkVue from '~/index'

const app = createApp(App)
app.use(SkVue)
app.mount('#app')
