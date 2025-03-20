
import axios from "axios";
export default {
    async getOrders(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.getAll ;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                context.commit('refresh',response.data.orders);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    }
}; 