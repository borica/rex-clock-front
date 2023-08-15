import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)

app.use(router)
app.use(WaveUI, { /* Some Wave UI options */ })

app.mount('#app')
