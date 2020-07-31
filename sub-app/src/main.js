/*
 * @Author: jinglin.tan
 * @Date: 2020-07-31 16:51:53
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 16:53:29
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

function render () {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#sub-app')
}

// 不在 qiankun 启动的状态下 自己调用 render 可作为单独应用显示
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('正在使用独立项目启动 bi')
  render()
}

export async function bootstrap (props) {
  console.log('subapp bi is bootstraped0', props)
}

export async function mount (props) {
  console.log('props from main app', props)
  render()
}

export async function update (props) {
  console.log(props)
}

export async function unmount () {
  instance.$destory()
  instance = null
}
