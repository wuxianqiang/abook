import Vue from 'vue'
import App from './App.vue'
// import Abook from 'abook';
// import 'abook/lib/theme-chalk/index.css';
import { HelloWorld } from 'abook';
Vue.config.productionTip = false
/* eslint-disable */
// Vue.use(Abook)
Vue.component(HelloWorld.name, HelloWorld)
new Vue({
  render: h => h(App),
}).$mount('#app')
