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
                for(let i = 0 ;  i < context.rootState.homeProductStore.trendProducts.length ; ++i ){
                    if(context.rootState.homeProductStore.trendProducts[i].id === product.id){
                        context.rootState.homeProductStore.trendProducts[i].favorated= true;
                        break;
                    }
                }
                for(let i = 0 ;  i < context.rootState.homeProductStore.latestProducts.length ; ++i ){
                    if(context.rootState.homeProductStore.latestProducts[i].id === product.id){
                        context.rootState.homeProductStore.latestProducts[i].favorated = true;
                        break;
                    }
                }
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
                for(let i = 0 ;  i < context.rootState.homeProductStore.trendProducts.length ; ++i ){
                    if(context.rootState.homeProductStore.trendProducts[i].id === product.product_id){
                        context.rootState.homeProductStore.trendProducts[i].favorated= false;
                        break;
                    }
                }
                for(let i = 0 ;  i < context.rootState.homeProductStore.latestProducts.length ; ++i ){
                    if(context.rootState.homeProductStore.latestProducts[i].id === product.product_id){
                        context.rootState.homeProductStore.latestProducts[i].favorated = false;
                        break;
                    }
                }
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