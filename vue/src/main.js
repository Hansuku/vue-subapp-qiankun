/*
 * @Author: jinglin.tan
 * @Date: 2020-07-30 10:54:47
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-30 14:50:06
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
