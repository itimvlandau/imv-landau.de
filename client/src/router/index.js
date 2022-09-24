import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Startseite',
    component: HomeView
  },
  {
    path: '/news',
    name: 'Neuigkeiten',
    component: () => import( /* webpackChunkName: "news" */ '../views/NewsView.vue')
  },
  {
    name: 'Der Islam',
    path: '/islam/definition',
    component: () => import( /* webpackChunkName: "islam" */ '../views/IslamView.vue')
  },
  {
    name: 'Die Propheten',
    path: '/islam/prophets',
    component: () => import( /* webpackChunkName: "prophets" */ '../views/ProphetsView.vue')
  },
  {
    name: 'Der Sinn des Lebens',
    path: '/islam/sense-of-life',
    component: () => import( /* webpackChunkName: "sense_of_live" */ '../views/SenseOfLiveView.vue')
  },
  {
    name: 'Frauen im Islam',
    path: '/islam/women-and-islam',
    component: () => import( /* webpackChunkName: "women_and_islam" */ '../views/WomenAndIslamView.vue')
  },
  {
    name: 'Der edle Koran',
    path: '/islam/noble-quran',
    component: () => import( /* webpackChunkName: "noble_quran" */ '../views/NobleQuranView.vue')
  },
  {
    path: '/prayer',
    name: 'Gebet',
    component: () => import( /* webpackChunkName: "prayer" */ '../views/PrayerView.vue')
  },
  {
    path: '/donate',
    name: 'Spenden',
    component: () => import( /* webpackChunkName: "donate" */ '../views/DonateView.vue')
  },
  {
    path: '/schedule',
    name: 'Aktivitäten',
    component: () => import( /* webpackChunkName: "schedule" */ '../views/ScheduleView.vue')
  },
  {
    path: '/location',
    name: 'Kontakt',
    component: () => import( /* webpackChunkName: "location" */ '../views/LocationView.vue')
  },
  {
    path: '/statute',
    name: 'Satzung',
    component: () => import( /* webpackChunkName: "statute" */ '../views/StatuteView.vue')
  },
  {
    path: '/imprint',
    name: 'Impressum',
    component: () => import( /* webpackChunkName: "imprint" */ '../views/ImprintView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
