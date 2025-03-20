export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            create: ip + 'product/create' ,
            get: ip + 'product/get-all-of-mine' ,
            update: ip + 'product/update',
            delete : ip +'product/delete',
        }
    },loadingPage(state,){
        return state.loadingPage;
    },
    getMyProduct(state){
        return state.myProducts;
    }
};