import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/permission'
import 'font-awesome/css/font-awesome.css'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import VueAwsomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwsomeSwiper)
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
