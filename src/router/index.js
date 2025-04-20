import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';

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
      {path:'home-users' , component: import('@/views/Admin/Childreens/Home/AdminHomeUsers.vue')},
      {path:'home-products' , component: import('@/views/Admin/Childreens/Home/AdminHomeProduct.vue')},
      {path:'users' , component: import('@/views/Admin/Childreens/Users/AdminUsers.vue')},
      {path:'users/blocking' , component: import('@/views/Admin/Childreens/Users/AdminUsersBlocking.vue')},
      {path:'users/admins' , component: import('@/views/Admin/Childreens/Users/AdminUsersAdmins.vue')},
      {path:'notifications' , component: import('@/views/Admin/Childreens/Notifications/AdminNoti.vue')},
      {path:'info' , component: import('@/views/Admin/Childreens/AdminInfo.vue')},
    ],
      beforeEnter  (to, from, next) {
        next();
        // const store = useStore();
        // store.commit('authStore/getTokenLocal');
        // const token = store['getters']['authStore/getToken'].token;
        // if(!token.length){
        //   next({name:'notAuth'});
        // }
        // const isAdmin = store['getters']['authStore/getProfile'];
        // console.log(isAdmin);
        // if(!isAdmin){
        //   next({name:'notFound'});
        // }
        // next();
    }
  },
  {path: '/err-not-auth', component: import('@/views/System/NotAuthorized.vue') , name:'notAuth' },
  {path: '/err-not-found', component: import('@/views/System/Error404.vue'),name:'notFound' },
  { path: '/:pathMatch(.*)*', redirect: '/err-not-found' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const fullBath = to.fullPath;
  if(fullBath === '/log-in' || fullBath === '/sign-up' || fullBath === '/err-not-found' || fullBath === '/err-not-auth'){
    next();
  }else{
    const store = useStore();
    if(store.getters['authStore/getToken'].token || localStorage.getItem('token')){
      next();
    }else{
      router.push('/err-not-auth');
    }
  }
});

export default router
