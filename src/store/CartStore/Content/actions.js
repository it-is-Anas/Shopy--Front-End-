import axios from "axios";

export default {
    async getCart(context,){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.getCart;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                context.commit('setCart',response.data.cart);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    },async getCartProducts(context,){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.getCartProducts;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                context.commit('setCartProducts',response.data);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    },async plusProduct(context,payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.increaseOne+ '/'+payload.id;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===201){
                context.commit('increaseProduct',payload);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    },async minusProduct(context,payload){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.decreaseOne+ '/'+payload.id;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===201){
                context.commit('decreaseProduct',payload);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    },async clearCart(context){
        // clearCart
        context.commit('openLoadingPage');
        const ip = context.getters.ip.clearCart ;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                context.commit('clearCart');
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    },async order(context){
        // clearCart
        context.commit('openLoadingPage');
        const ip = context.getters.ip.createOrder ;
        const token = context.getters.getToken;
        try{    
            const response = await axios.post(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===201){
                context.commit('clearCart');
            }
            context.commit('closeLoadingPage');
        }catch(err){
            console.log(err);
            context.commit('closeLoadingPage');
        };
    }
}; 