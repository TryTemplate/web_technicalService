import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import Index from '@/views/Index'

Vue.use(Router)

let baseHF = { header: Header, footer: Footer}

export default new Router({
  routes: [
    {
      path: '/',
      components: {...baseHF, default:Index}
    }
  ]
})
