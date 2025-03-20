export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            latestProducts: ip + 'product/latest-products' ,
            trendProducts: ip + 'product/trend-products' ,
            addToCart: ip + 'product-action/create',
        }
    },loadingPage(state,){
        return state.loadingPage;
    }
    ,latestProducts(state){
        return state.latestProducts;
    }
    ,trendProducts(state){
        return state.trendProducts;
    }
};