import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  const VueBook = require('vue-book')

  demoRoutes.push(
    VueBook.createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    VueBook.createRoute({
      requireContext: require.context('./../components', true, /.vue$/),
      path: '/presentation',
    }),
  )

  Vue.use(VueBook.VueBookComponents)
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'view-awardees' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          // component: require('../components/auth/login/Login.vue'),
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'account',
          path: 'account',
          // component: require('../components/auth/account/Account.vue'),
          component: lazyLoading('auth/account/Account'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'users',
          path: 'users',
          component: EmptyParentComponent,
          children: [
            {
              name: 'view-users',
              path: 'view-users',
              // component: require('../components/users/view-users/ViewUsers.vue'),
              component: lazyLoading('users/view-users/ViewUsers'),
            },
            {
              name: 'new-user',
              path: 'new-user',
              // component: require('../components/users/new-user/NewUser.vue'),
              component: lazyLoading('users/new-user/NewUser'),
            },
            {
              name: 'edit-user',
              path: 'edit-user',
              // component: require('../components/users/edit-user/EditUser.vue'),
              component: lazyLoading('users/edit-user/EditUser'),
            }
          ]
        },
        {
          name: 'awardees',
          path: 'awardees',
          component: EmptyParentComponent,
          children: [
            {
              name: 'view-awardees',
              path: 'view-awardees',
              // component: require('../components/awardees/view-awardees/ViewAwardees.vue'),
              component: lazyLoading('awardees/view-awardees/ViewAwardees'),
            },
            {
              name: 'view-awardee',
              path: 'view-awardee',
              // component: require('../components/awardees/view-awardees/ViewAwardees.vue'),
              component: lazyLoading('awardees/view-awardee/ViewAwardee'),
            },
            {
              name: 'add-awardee',
              path: 'add-awardee',
              // component: require('../components/awardees/add-awardee/AddAwardee.vue'),
              component: lazyLoading('awardees/add-awardee/AddAwardee'),
            },
            {
              name: 'edit-awardee',
              path: 'edit-awardee',
              // component: require('../components/awardees/edit-awardee/EditAwardee.vue'),
              component: lazyLoading('awardees/edit-awardee/EditAwardee'),
            },
            {
              name: 'print-awardee',
              path: 'print-awardee',
              // component: require('../components/awardees/view-awardees/ViewAwardees.vue'),
              component: lazyLoading('awardees/view-awardees/ViewAwardee'),
            }
          ]
        },
      ],
    },
  ],
})
