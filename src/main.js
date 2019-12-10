import Vue from 'vue'
import App from './App'

// weui
import 'mpvue-weui/src/style/weui.css'
import '../src/style/iconfont.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
