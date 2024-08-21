import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3GoogleOauth from 'vue3-google-oauth2'

const app = createApp(App)

const gAuthOptions = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account'
}

app.use(Vue3GoogleOauth, gAuthOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
