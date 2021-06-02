import { createWebHistory, createRouter } from "vue-router";

import TitlePage from './pages/TitlePage.vue'
import SubjectPage from './pages/SubjectPage.vue'
import ServicestPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage.vue'
import CalendarPage from './pages/CalendarPage.vue'
import JournalPage from './pages/JournalPage.vue'
import NotFoundPage from './pages/NotFound.vue'
import AccessDenied from './pages/AccessDeniedPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TitlePage },
    { path: '/:slug' , component: SubjectPage, props: true },
    { path: '/services', component: ServicestPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/calendary', component: CalendarPage },
    { path: '/journal', component: JournalPage },
    { path: '/denied', component: AccessDenied },
    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
})

export default router