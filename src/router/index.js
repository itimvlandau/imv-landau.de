import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Startseite',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/news',
    name: 'Neuigkeiten',
    component: () => import( /* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    name: 'Der Islam',
    path: '/islam/definition',
    component: () => import( /* webpackChunkName: "about" */ '../views/Islam.vue')
  },
  {
    name: 'Die Propheten',
    path: '/islam/prophets',
    component: () => import( /* webpackChunkName: "about" */ '../views/Prophets.vue')
  },
  {
    name: 'Der Sinn des Lebens',
    path: '/islam/sense-of-life',
    component: () => import( /* webpackChunkName: "about" */ '../views/SenseOfLive.vue')
  },
  {
    name: 'Frauen im Islam',
    path: '/islam/women-and-islam',
    component: () => import( /* webpackChunkName: "about" */ '../views/WomenAndIslam.vue')
  },
  {
    name: 'Der edle Koran',
    path: '/islam/noble-quran',
    component: () => import( /* webpackChunkName: "about" */ '../views/NobleQuran.vue')
  },
  {
    path: '/prayer',
    name: 'Gebet',
    component: () => import( /* webpackChunkName: "about" */ '../views/Prayer.vue')
  },
  {
    path: '/donate',
    name: 'Spenden',
    component: () => import( /* webpackChunkName: "about" */ '../views/Donate.vue')
  },
  {
    path: '/schedule',
    name: 'Aktivitäten',
    component: () => import( /* webpackChunkName: "about" */ '../views/Schedule.vue')
  },
  {
    path: '/location',
    name: 'Kontakt',
    component: () => import( /* webpackChunkName: "about" */ '../views/Location.vue')
  },
  {
    path: '/statute',
    name: 'Satzung',
    component: () => import( /* webpackChunkName: "about" */ '../views/Statute.vue')
  },
  {
    path: '/imprint',
    name: 'Impressum',
    component: () => import( /* webpackChunkName: "about" */ '../views/Imprint.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
