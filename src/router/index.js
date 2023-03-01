import { createRouter, createWebHistory } from 'vue-router'
import ShopCatalog from '@/components/ShopCatalog.vue'
import Register from '@/components/RegistreUser.vue'
import LoginUser from '@/components/LoginUser.vue'
import OrdersUser from '@/components/OrderUser.vue'
import CartUser from '@/components/CartUser.vue'
import ExitUser from '@/components/ExitUser.vue'
import SetToken from '@/components/SetToket.vue'

const routes = [
  {
    path: '/',
    name: 'ShopCatalog',
    component: ShopCatalog
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: Register
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/orders',
    name: 'OrdersUser',
    component: OrdersUser
  },
  {
    path: '/cart',
    name: 'CartUser',
    component: CartUser
  },
  {
    path: '/exit',
    name: 'ExitUser',
    component: ExitUser
  },
  {
    path: '/token',
    name: 'SetToken',
    component: SetToken
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
