import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入字体图标样式
import './assets/fonts/iconfont.css'
// 引入初始化样式
import './assets/css/base.less'
// 引入api
import './api'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
