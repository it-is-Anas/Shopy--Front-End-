export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            getUsers: ip + 'admin/get-users',    
            blockUser: ip + 'admin/block-user/',    
            unBlockUser: ip + 'admin/un-block-user/', 
            pointAsAdmin: ip + 'admin/create-sub-admin/',//id
            unPointAsAdmin: ip + 'admin/delete-sub-admin/',//id
            pullProduct: ip + 'product/latest-products',//get
            
        }
    },getUsers(state){
        return state.users;
    },
    getProducts(state){
        return state.products;
    },getLoading(state){
        return state.loading;
    }
};