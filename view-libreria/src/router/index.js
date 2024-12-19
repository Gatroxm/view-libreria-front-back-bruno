import { createRouter, createWebHistory } from 'vue-router'
import LibrosView from '../views/LibrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Libros',
      component: LibrosView,
    },
    {
      path: '/nuevo-libro',
      name: 'nuevolibro',
      component: () => import('../views/NuevoLibroView.vue'),
    },
    {
      path: '/editar-libro/:id',
      name: 'editarlibro',
      component: () => import('../views/EditarLibroView.vue'),
    }
  ],
})

export default router
