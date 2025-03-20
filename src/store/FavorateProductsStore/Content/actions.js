import axios from "axios";

export default {
    async create(context,payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.create+'/'+payload.id;
        const token = context.getters.getToken;
        try{
            const response = await axios.post(ip,{},{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 201){
                const product = response.data.product;
                context.commit('refresh',product);
                console.log(context.getters.getFavorateProducts);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        }
    },async delete(context,payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.delete +'/'+payload.id;
        const token = context.getters.getToken;
        try{
            const response = await axios.delete(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const product = response.data.product;
                context.commit('delete',payload);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        }
    },async get(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.get;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const products = response.data.products;
                context.commit('refreshAll',products);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        }
    }
}; 