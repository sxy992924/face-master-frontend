import { createRouter, createWebHashHistory } from 'vue-router'
// import { useStore } from '@/store/index.js'

// pages
import Site from '@/components/pages/Site.vue' // 框架页
import LoginPage from '@/components/pages/LoginPage.vue' // 登陆页面
import StyleEdit from '@/components/pages/StyleEdit.vue' // 数据展示页面
import SuperRes from '@/components/pages/SuperRes.vue' // 数据展示页面
import AnalyzePage from '@/components/pages/AnalyzePage.vue' // 数据展示页面

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: 'super-res',
    component: Site,
    children: [
      {
        path: 'style-edit',
        name: 'styleEdit',
        component: StyleEdit,
      },
      {
        path: 'super-res',
        name: 'superRes',
        component: SuperRes,
      },
      {
        path: 'analyze',
        name: 'analyze',
        component: AnalyzePage,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 守卫
// router.beforeEach(async (to) => {
//   const store = useStore()
//   // check if jwt is in localStorage
//   if (!['login', 'register'].includes(to.name) && store.jwt === '')
//     return { name: 'login' }
// })

export default router
