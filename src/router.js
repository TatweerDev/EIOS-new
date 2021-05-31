import { createWebHistory, createRouter } from "vue-router";

import TitlePage from './pages/TitlePage.vue'
import SubjectPage from './pages/SubjectPage.vue'
import ServicestPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TitlePage },
    { path: '/subject', component: SubjectPage },
    { path: '/services', component: ServicestPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/calendary', component: null },
    { path: '/:notFound(.*)', component: null },
  ],
})

export default router