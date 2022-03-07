// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'



import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'


//全局样式
import "../src/assets/css/base.css";
import "../src/assets/css/m.css";



Vue.config.productionTip = false

Vue.use(ElementUI, VueAxios, axios)

new Vue({
  router,
  data:{
      minWith: 960, //小屏幕宽度
      isMinScreen: false,
      isLoadMobileCss: false
  },
  methods: {
      //检测是否是小屏幕
      checkMinScreen(){
          return document.body.clientWidth <= this.minWith
      },
  },
  mounted (){
      if (this.checkMinScreen()) {
          this.isMinScreen = true
      }
      // 监听窗口大小
      window.onresize = () => {
          if (document.body.clientWidth < this.minWith) {
              this.isMinScreen = true
          } else {
              this.isMinScreen = false
          }
      }
  },
  render: h => h(App),
}).$mount('#app')
