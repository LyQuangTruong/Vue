import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<any> = [
  {
    path: '/',
    name: 'jobs',
    component: () => import('@/components/JobList.vue'),
  },
  {
    path: '/test-common',
    name: 'testCommon',
    component: () => import('@/views/TestCommon.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
