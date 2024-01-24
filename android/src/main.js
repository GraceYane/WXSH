import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

 import Vant from 'vant'
 import 'vant/lib/index.css'
//引入VueRouter
import VueRouter from 'vue-router'
import router from './router/index'
import axios from "axios";
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
// 跨端口cookie问题，前后端各自加上一行代码，前端的加上这一行
axios.defaults.withCredentials = true

Vue.use(ElementUI);
Vue.use(Vant)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App), router:router
}).$mount('#app')
