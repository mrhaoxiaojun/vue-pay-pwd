/**
 * author haoxiaojun
 * on 2018-07
 * des 实现vue支付密码插件
 */
import Vue from 'vue'
import App from './App.vue'
import vuePayPwd from './lib/index'
// import vuePayPwd from '../dist/vue-pay-pwd'
Vue.use(vuePayPwd)
new Vue({
  el: '#app',
  render: h => h(App)
})
