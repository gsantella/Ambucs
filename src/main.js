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
import { Auth } from 'aws-amplify'

Vue.use(router)
Vue.use(VuesticPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        if (to.matched.some(record => record.meta.requiresWriteUser)) {
          if (data.attributes['custom:writeUserPerm2']) {
            next()
            return
          }
          store.commit('setLoading', false)
          next('/admin/awardees/view-awardees')
          return
        }

        if (to.matched.some(record => record.meta.requiresWriteAwardee)) {
          if (data.attributes['custom:writeAwardeePerm2']) {
            next()
            return
          }
          store.commit('setLoading', false)
          next('/admin/awardees/view-awardees')
          return
        }

        next()
      }).catch(() => {
        next('/auth/login')
      })
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
