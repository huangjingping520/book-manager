import { createRouter, createWebHistory } from 'vue-router'
import Book from '../components/book.vue'
import User from '../components/user.vue'
import Admin from '../components/admin.vue'
import Borrow from '../components/borrow.vue'
import Ticket from '../components/ticket.vue'
import Return from '../components/return.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/book'
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/return',
      name: 'Return',
      component: Return
    }
  ]
})

export default router
