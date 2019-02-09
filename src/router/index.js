import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
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
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
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
              component: lazyLoading('users/view-users/ViewUsers'),
            },
            {
              name: 'new-user',
              path: 'new-user',
              component: lazyLoading('users/new-user/NewUser'),
            },
            {
              name: 'edit-user',
              path: 'edit-user',
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
              component: lazyLoading('awardees/view-awardees/ViewAwardees'),
            },
            {
              name: 'add-awardee',
              path: 'add-awardee',
              component: lazyLoading('awardees/add-awardee/AddAwardee'),
            },
            {
              name: 'edit-awardee',
              path: 'edit-awardee',
              component: lazyLoading('awardees/edit-awardee/EditAwardee'),
            }
          ]
        },
      ],
    },
  ],
})
