import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
]

export const asyncRoutes = [
  {
    path: '/advancedAccount',
    component: Layout,
    children: [
      {
        path: 'page',
        component: () => import('@/views/advancedAccount/page'),
        name: 'PageAdvancedAccount',
        meta: {
          title: 'PageAdvancedAccount',
          icon: 'badge',
        }
      }
    ]
  },
  {
    path: '/advancedGroup',
    component: Layout,
    children: [
      {
        path: 'page',
        component: () => import('@/views/advancedGroup/page'),
        name: 'PageAdvancedGroup',
        meta: {
          title: 'PageAdvancedGroup',
          icon: 'adminUser'
        }
      }
    ]
  },
  {
    path: '/dialogueRecordQuery',
    component: Layout,
    children: [
      {
        path: 'page',
        component: () => import('@/views/dialogueRecordQuery/page'),
        name: 'PageDialogueRecordQuery',
        meta: {
          title: 'PageDialogueRecordQuery',
          icon: 'message'
        }
      }
    ]
  },  
  {
    path: '/certificationManagement',
    component: Layout,
    redirect: '/certificationManagement/page',
    alwaysShow: true, // will always show the root menu
    name: 'certificationManagement',
    meta: {
      title: 'certificationManagement',
      icon: 'skill'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/certificationManagement/page'),
        name: 'PagecertificationManagement',
        meta: {
          title: 'certificationManagementList'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
