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
        }
    },getUsers(state){
        return state.users;
    },
};