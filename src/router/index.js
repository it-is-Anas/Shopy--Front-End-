import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';

import routesGuard from './Guards/Security';
import adminGuard from './Guards/Admin';


const routes = [
  {path: '/log-in' , component: import('@/views/Auth/AuthLogin.vue')},
  {path: '/sign-up' , component: import('@/views/Auth/AuthSignup.vue')},
  {path: '/home', component: import('@/views/UserPages/Home.vue')},
  {path: '/profile', component: import('@/views/UserPages/Profile.vue')},
  {path: '/favorate', component: import('@/views/UserPages/Favorate.vue')},
  {path: '/cart', component: import('@/views/UserPages/Cart.vue')},
  {path: '/order', component: import('@/views/UserPages/Order.vue')},
  {path: '/admin' , component: import('@/views/Admin/Admin.vue') ,
    children:[
      {
        path:'home-users' , 
        component: import('@/views/Admin/Childreens/Home/AdminHomeUsers.vue'),
        beforeEnter:adminGuard
      },
      {path:'home-products' , component: import('@/views/Admin/Childreens/Home/AdminHomeProduct.vue'),beforeEnter:adminGuard},
      {path:'users' , component: import('@/views/Admin/Childreens/Users/AdminUsers.vue'),beforeEnter:adminGuard},
      {path:'users/blocking' , component: import('@/views/Admin/Childreens/Users/AdminUsersBlocking.vue'),beforeEnter:adminGuard},
      {path:'users/admins' , component: import('@/views/Admin/Childreens/Users/AdminUsersAdmins.vue'),beforeEnter:adminGuard},
      {path:'notifications' , component: import('@/views/Admin/Childreens/Notifications/AdminNoti.vue'),beforeEnter:adminGuard},
      {path:'info' , component: import('@/views/Admin/Childreens/AdminInfo.vue'),beforeEnter:adminGuard},
    ],beforeEnter:adminGuard
  },
  {path: '/err-not-auth', component: import('@/views/System/NotAuthorized.vue') , name:'notAuth' },
  {path: '/err-not-found', component: import('@/views/System/Error404.vue'),name:'notFound' },
  {path: '/only-admin', component: import('@/views/System/OnlyAdmin.vue'),name:'onlyAdmin' },
  {path: '/blocked-403', component: import('@/views/System/Blocked403.vue'),name:'blocked403' },
  { path: '/:pathMatch(.*)*', redirect: '/err-not-found' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( routesGuard );

export default router
