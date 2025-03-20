export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    },
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            get: ip + 'notfication/get' ,
            seen: ip + 'notfication/see-notfication/' ,
        }
    },
    loadingNotfication(state){
        return state.loadingNotfication;
    },
    getNotifications(state){
        return state.notifications;
    },getUnSeened(state){
        const notifications = state.notifications;
        const unSeened = [];
        for(let noti of notifications){
            if(!noti.seen){
                unSeened.push(noti);
            }
        }
        return unSeened;
    }
};