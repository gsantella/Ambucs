import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: 'login' },
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
          name: 'forgot-password',
          path: 'forgot-password',
          component: lazyLoading('auth/forgot-password/ForgotPassword'),
        },
        {
          name: 'reset-password',
          path: 'reset-password',
          component: lazyLoading('auth/reset-password/ResetPassword'),
        },
        {
          name: 'account',
          path: 'account',
          meta: {
            requiresAuth: true
          },
          component: lazyLoading('auth/account/Account'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
      default: true
    },
    {
      path: '/print',
      component: EmptyParentComponent,
      children: [
        {
          name: 'print-awardee',
          path: 'print-awardee',
          component: lazyLoading('awardees/view-awardees/PrintAwardee'),
          meta: {
            requiresAuth: true,
          }
        }
      ]
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
              meta: {
                requiresAuth: true,
                requiresWriteUser: true
              }
            },
            {
              name: 'new-user',
              path: 'new-user',
              component: lazyLoading('users/new-user/NewUser'),
              meta: {
                requiresAuth: true,
                requiresWriteUser: true
              }
            },
            {
              name: 'edit-user',
              path: 'edit-user',
              component: lazyLoading('users/edit-user/EditUser'),
              meta: {
                requiresAuth: true,
                requiresWriteUser: true
              }
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
              meta: {
                requiresAuth: true,
              }
            },
            {
              name: 'add-awardee',
              path: 'add-awardee',
              component: lazyLoading('awardees/add-awardee/AddAwardee'),
              meta: {
                requiresAuth: true,
                requiresWriteAwardee: true
              }
            },
            {
              name: 'edit-awardee',
              path: 'edit-awardee',
              component: lazyLoading('awardees/edit-awardee/EditAwardee'),
              meta: {
                requiresAuth: true,
              }
            }
          ]
        },
      ],
    },
  ],
})
