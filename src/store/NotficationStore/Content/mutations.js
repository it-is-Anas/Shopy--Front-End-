export default {
    save(state,payload){
        state.notifications = payload;
    },makeSeen(state,payload){
        const id = payload.id;
        const notifications = state.notifications;
        for(let i = 0; i < notifications.length ; ++i){
            if(notifications[i].id === id){
                notifications[i].seen = 1;
                break;
            }
        }
        state.notifications = notifications;
    }
    ,openLoadingPage(state){
        state.loadingNotfication = true;
    }
    ,closeLoadingPage(state){
        state.loadingNotfication = !true;
    }
};