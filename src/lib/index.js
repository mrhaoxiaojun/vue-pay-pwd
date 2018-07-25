/**
 * author haoxiaojun
 * on 2018-07
 * des 实现vue支付密码插件
 */
import vuePayPwd from './vue-pay-pwd.vue' // 导入组件
const vue2pay = {
  /**
   * vue.js 的插件应当有一个公开方法 install 
   * https://cn.vuejs.org/v2/guide/plugins.html
   *
   * @param {*} Vue Vue 构造器
   * @param {*} options 可选的选项对象
   */
  install (Vue, options) {
    Vue.component(vuePayPwd.name, vuePayPwd)  // vuePayPwd.name 组件的name属性
  }
}
export default vue2pay // 导出..