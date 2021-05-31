import { createWebHistory, createRouter } from "vue-router";

import TitlePage from './pages/TitlePage.vue'
import SubjectPage from './pages/SubjectPage.vue'
import ServicestPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage.vue'
import CalendarPage from './pages/CalendarPage.vue'
import JournalPage from './pages/JournalPage.vue'
import NotFoundPage from './pages/NotFound.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TitlePage },
    { path: '/subject', component: SubjectPage },
    { path: '/services', component: ServicestPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/calendary', component: CalendarPage },
    { path: '/journal', component: JournalPage },
    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
})

export default router