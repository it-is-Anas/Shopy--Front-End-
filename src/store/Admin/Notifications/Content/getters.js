export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            getNotifications: ip + 'admin/notfication/get-all-notfication',        
            createNotifications: ip + 'admin/notfication/create',        
        }
    },getNots(state){
        return state.nots;
    },getLoading(state){
        return state.loading;
    },getMsg(state){
        return state.msg;
    }
};