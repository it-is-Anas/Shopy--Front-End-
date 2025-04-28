import axios from "axios";

export default {
    async pullNotification(context,payload){
        const url = context.getters.ip.getNotifications;
        const token = context.getters.getToken;
        context.commit('openLoading');
        try{
            const response = await axios.get(url ,{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            context.commit('closeLoading');
            if(response.status === 200){
                context.commit('updateLocalNots',response.data.nots);
            }
        }catch(err){
            context.commit('closeLoading');
            console.log(err,'ERR in block user from server');
        }; 
    },
    async createNotification(context,content){
        const url = context.getters.ip.createNotifications; 
        const token = context.getters.getToken;
        context.commit('openLoading');
        try{
            const response = await axios.post('http://localhost:3000/admin/notfication/create',{content},{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            if(response.status === 201){
                const not =response.data.not;
                context.commit('createNot',not);
            }
            context.commit('closeLoading');
            context.commit('setMsg','Notification Has been created !');
        }catch(err){
            context.commit('closeLoading');
            console.log('Err in notfifcation creation');
            console.log(err);
        }
    }, 
}; 