import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Startseite',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/news',
    name: 'Neuigkeiten',
    component: () => import( /* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    name: 'Der Islam',
    path: '/islam/definition',
    component: () => import( /* webpackChunkName: "islam" */ '../views/Islam.vue')
  },
  {
    name: 'Die Propheten',
    path: '/islam/prophets',
    component: () => import( /* webpackChunkName: "prophets" */ '../views/Prophets.vue')
  },
  {
    name: 'Der Sinn des Lebens',
    path: '/islam/sense-of-life',
    component: () => import( /* webpackChunkName: "sense_of_live" */ '../views/SenseOfLive.vue')
  },
  {
    name: 'Frauen im Islam',
    path: '/islam/women-and-islam',
    component: () => import( /* webpackChunkName: "women_and_islam" */ '../views/WomenAndIslam.vue')
  },
  {
    name: 'Der edle Koran',
    path: '/islam/noble-quran',
    component: () => import( /* webpackChunkName: "noble_quran" */ '../views/NobleQuran.vue')
  },
  {
    path: '/prayer',
    name: 'Gebet',
    component: () => import( /* webpackChunkName: "prayer" */ '../views/Prayer.vue')
  },
  {
    path: '/donate',
    name: 'Spenden',
    component: () => import( /* webpackChunkName: "donate" */ '../views/Donate.vue')
  },
  {
    path: '/schedule',
    name: 'Aktivitäten',
    component: () => import( /* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/location',
    name: 'Kontakt',
    component: () => import( /* webpackChunkName: "location" */ '../views/Location.vue')
  },
  {
    path: '/statute',
    name: 'Satzung',
    component: () => import( /* webpackChunkName: "statute" */ '../views/Statute.vue')
  },
  {
    path: '/imprint',
    name: 'Impressum',
    component: () => import( /* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
