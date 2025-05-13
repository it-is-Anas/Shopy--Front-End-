import { createStore } from 'vuex'
 
import authStore from './Auth/main';
import notificationStore from './NotficationStore/main';
import myProductStore from './MyProductStore/main';
import homeProductStore from './HomeProductsStore/main';
import favorateProductsStore from './FavorateProductsStore/main';
import CartStore from './CartStore/main';
import orderStore from './Order/main';
import adminHomeStore from './Admin/Home/main';
import adminNotsStore from './Admin/Notifications/main';
export default createStore({
  state: {
    backEndIp: 'http://localhost:3000/',
    // backEndIp: 'http://192.168.1.5:3000/',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore,
    notificationStore,
    myProductStore,
    homeProductStore,
    favorateProductsStore,
    CartStore,
    orderStore,
    adminHomeStore,
    adminNotsStore,
  }
})
