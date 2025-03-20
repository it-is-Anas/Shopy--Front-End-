import axios from "axios";
export default {
    async getMyNotfications(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.get;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {'Authorization' : 'Beare '+ token},
            });
            if(response.status === 200){
                const data = response.data.notfications;
                context.commit('save',data);
            }
            context.commit('closeLoadingPage');            
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    },
    async makeNotificationSeen(context , payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.seen + payload.id;
        const token = context.getters.getToken;
        try{
            const response = await axios.patch(ip,{/* empty body */},{
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            if(response.status === 200){
                context.commit('makeSeen',{id: payload.id});
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    }
};