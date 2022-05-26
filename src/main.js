import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/styles.less'
import componentsUi from '@/components/UI'

const app = createApp(App)

componentsUi.forEach(componentUi => {
    app.component(componentUi.name, componentUi)
})

app
    .use(store)
    .use(router)
    .mount('#app')
