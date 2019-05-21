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
import BootstrapVue from 'bootstrap-vue'
import JsonCSV from 'vue-json-csv'

Vue.component('downloadCsv', JsonCSV)
Vue.use(JsonCSV)
Vue.use(router)
Vue.use(VuesticPlugin)
Vue.use(BootstrapVue)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)

  if (to.matched.some(record => record.meta.requiresAuth)) {
    let userPerm = localStorage.getItem('userPerm')
    let awardeeWritePerm = localStorage.getItem('awardeePerm')
    let chapterPerm = localStorage.getItem('chapterPerm')

    if (to.matched.some(record => record.meta.requiresWriteChapter)) {
      if (chapterPerm) {
        next()
        return
      }
      store.commit('setLoading', false)
      next('/admin/awardees/view-awardees')
      return
    }

    if (to.matched.some(record => record.meta.requiresWriteUser)) {
      if (userPerm) {
        next()
        return
      }
      store.commit('setLoading', false)
      next('/admin/awardees/view-awardees')
      return
    }

    if (to.matched.some(record => record.meta.requiresWriteAwardee)) {
      if (awardeeWritePerm) {
        next()
        return
      }
      store.commit('setLoading', false)
      next('/admin/awardees/view-awardees')
      return
    }

    next()
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
