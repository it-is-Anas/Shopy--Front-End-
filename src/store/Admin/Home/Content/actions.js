import axios from "axios";

export default {
    async pullUsers(context){
        const url = context.getters.ip.getUsers;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            if(response.status === 200){
                const users = response.data.users;
                context.commit('updateLocalUsers',users);
                console.log(users);
            }
        }catch(err){
            console.log(err,'ERR in pull users from server');
        };  
    },async blockUser(context,userId){
        const url = context.getters.ip.blockUser;
        const token = context.getters.getToken;
        try{
            const response = await axios.patch(url + userId, {} ,{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            if(response.status === 201){
                context.commit('blockUser',userId);
            }
        }catch(err){
            console.log(err,'ERR in block user from server');
        };  
    },async unBlockUser(context,userId){
        const url = context.getters.ip.unBlockUser;
        const token = context.getters.getToken;
        try{
            const response = await axios.patch(url + userId, {} ,{
                headers:{
                    Authorization: 'Bearer '+ token,
                }
            });
            if(response.status === 201){
                context.commit('unBlockUser',userId);
            }
        }catch(err){
            console.log(err,'ERR in block user from server');
        }; 
    }
}; 