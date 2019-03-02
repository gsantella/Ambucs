// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
// import axios from 'axios'

// Vue.use(axios)
Vue.use(router)
Vue.use(VuesticPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.User.email !== '' && store.getters.User.password !== '') {
      if (to.matched.some(record => record.meta.requiresWriteUser)) {
        if (store.getters.User.writeUserPerm2) {
          next()
          return
        }
        next('/')
      }
      if (to.matched.some(record => record.meta.requiresWriteAwardee)) {
        if (store.getters.User.writeAwardeePerm2) {
          next()
          return
        }
        next('/')
      }
      next()
      return
    }
    next('/auth/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  // axios,
  router,
  store,
  render: h => h(App),
})
