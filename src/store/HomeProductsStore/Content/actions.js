import axios from "axios";

export default {
    async latestProducts(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.latestProducts;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const latestProducts = response.data.products;
                context.commit('refreshLatestProducts',latestProducts);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        }
    },
    async trendProducts(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.trendProducts;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            context.commit('closeLoadingPage');
            if(response.status === 200){
                const trendProducts = response.data.products;
                // console.log(token);
                context.commit('refreshTrendProducts',trendProducts);
            }
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        }
    },async addToCart(context,payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.addToCart;
        const token = context.getters.getToken;
        try{
            const response = await axios.post(ip,{
                prod_id: payload.id,
                qty: 1,
            },{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){

            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        }
    },
}; 