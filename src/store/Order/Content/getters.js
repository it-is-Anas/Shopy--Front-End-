export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            getAll: ip + 'order/get-all',        
        }
    },getOrders(state){
        return state.orders;
    },loadingPage(state,){
        return state.loadingPage;
    }
};