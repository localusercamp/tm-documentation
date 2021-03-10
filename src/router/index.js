import Vue from 'vue'
import Router from 'vue-router'
import Backend from '@/components/Backend'
import CLI from '@/components/CLI'
import Frontend from '@/components/Frontend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      // component: Backend,
      redirect: { name: 'backend' },
    }, {
      path: '/backend',
      name: 'backend',
      component: Backend
    }, {
      path: '/cli',
      name: 'cli',
      component: CLI
    }, {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    }
  ]
})
