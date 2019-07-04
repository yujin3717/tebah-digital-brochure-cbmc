import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFlicking from '@egjs/vue-flicking'
import './registerServiceWorker'

Vue.use(VueFlicking)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
