export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            getCart: ip + 'cart/get',        
            getCartProducts: ip + 'product-action/get',        
            increaseOne: ip + 'product-action/add-one',//:prod_id        
            decreaseOne: ip + 'product-action/minus-one',//:prod_id        
            clearCart: ip + 'cart/clear-cart',       
            createOrder: ip + 'order/create',       
        }
    },getCart(state){
        return state.cart;
    },getCartProducts(state){
        return state.cartProducts;
    },getCartSum(state){
        return state.cartSum;
    },loadingPage(state,){
        return state.loadingPage;
    }
};