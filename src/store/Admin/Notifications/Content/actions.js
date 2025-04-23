import axios from "axios";

export default {
    async pullNotification(context,payload){
        const url = context.getters.ip.getNotifications;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(url ,{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            if(response.status === 200){
                context.commit('updateLocalNots',response.data.nots);
            }
        }catch(err){
            console.log(err,'ERR in block user from server');
        }; 
    },
    async createNotification(context,content){
        const url = context.getters.ip.createNotifications;
        const token = context.getters.getToken;
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
        }catch(err){
            console.log('Err in notfifcation creation');
            console.log(err);
        }
    }, 
}; 