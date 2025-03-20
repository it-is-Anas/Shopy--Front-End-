export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            // get: ip + 'product/get' ,
            create: ip + 'favorate-product/create' ,//id
            delete: ip + 'favorate-product/delete' ,//id
            get: ip + 'favorate-product/get',        
        }
    },getFavorateProducts(state){
        return state.favorateProducts;
    },loadingPage(state,){
        return state.loadingPage;
    }
};