import axios from "axios";

export default {
    async update(context,product){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.update+`/${product.id}`;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,product,{
                headers: {Authorization: 'Bearer '+ token}
            });
            if(response.status === 201){
                const product = response.data.product;
                context.commit('update',product);
                context.commit('closeLoadingPage');
            }
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    },
    async create(context,product){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.create;
        const token = context.getters.getToken;
        try{    
            const response = await axios.post(ip,product,{
                headers: {Authorization: 'Bearer '+ token},
                'Content-Type': 'multipart/form-data'
            });
            if(response.status === 201){
                const product = response.data.prodcut;
                context.commit('add',product);
                context.commit('closeLoadingPage');
            }
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    },async get(context){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.get;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+ token}
            });
            if(response.status === 200){
                const products = response.data.products;
                context.commit('refresh',products);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    },async delete(context,product){
        context.commit('openLoadingPage');
        const ip = context.getters.ip.delete+`/${product.id}`;
        const token = context.getters.getToken;
        try{    
            const response = await axios.delete(ip,{
                headers: {Authorization: 'Bearer '+ token}
            });
            if(response.status === 200){
                context.commit('delete',product);
            }
            context.commit('closeLoadingPage');
        }catch(err){
            context.commit('closeLoadingPage');
            console.log(err);
        };
    }
}; 