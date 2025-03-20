import axios from "axios";
import { useRoute } from "vue-router";

export default { 
    async signUp(context){
        context.commit('sendRequest');
        const ip = context.getters.ip.signUp;
        const data = context.getters.getSignUpProfile;
        try {
            const response = await axios.post(ip, data );
            context.commit('stopSendRequest');
            if(response.status === 201){
                const resData = response.data;
                context.commit('signUpSuccessfuly',{token: resData.token});
                context.commit('saveToLocal');
            }else{
                throw new Error();
            }
        } catch (error) {
            context.commit('stopSendRequest');
            if(error.response && (error.status == 401 || error.status == 422)){
                const resData = error.response.data;
                console.log('Error in validation from back end');
                if(resData.filed){
                    context.commit('setErr',{err: resData.msg});
                }else if(resData.msg){
                    context.commit('setErr',{err: resData.msg});
                }
            }
            else{
                console.error('Error during sign-up:', error);
                context.commit('setErr',{err: 'Some thing went wrong , please try again later !'});
            }
        }
    },
    async logIn(context){
        context.commit('sendRequest');
        const ip = context.getters.ip.logIn;
        const data = context.getters.getSignUpProfile;
        try {
            const response = await axios.post(ip, {email : data.email , password: data.password} );
            context.commit('stopSendRequest');
            if(response.status === 201){
                const resData = response.data;
                context.commit('signUpSuccessfuly',{token: resData.token});
                context.commit('saveToLocal');
            }else{
                throw new Error();
            }
        } catch (error) {
            context.commit('stopSendRequest');
            if(error.response && (error.status == 401 || error.status == 422)){
                const resData = error.response.data;
                console.log('Error in validation from back end');
                if(resData.filed){
                    context.commit('setErr',{err: resData.msg});
                }else if(resData.msg){
                    context.commit('setErr',{err: resData.msg});
                }
            }
            else{
                console.error('Error during sign-up:', error);
                context.commit('setErr',{err: 'Some thing went wrong , please try again later !'});
            } 
        }
    },async getProfile(context){
        context.commit('sendRequest');
        const ip = context.getters.ip.getProfile;
        const token = context.getters.getToken.token;
        try {
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+ token},
            } );
            context.commit('stopSendRequest');
            if(response.status === 200){
                const resData = response.data;
                context.commit('updateProfileDate',resData);
            }else{
                throw new Error();
            }
        } catch (error) {
            context.commit('stopSendRequest');
            context.commit('setErr',{err: 'Some thing went wrong , please try again later !'});
        }
    },async updateProfilePicture(context,formData){
        context.commit('sendRequest');
        const ip = context.getters.ip.updateProfilePicture;
        const token = context.getters.getToken.token;
        try {
            const response = await axios.put(ip, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `bearer ${token}`
                },
                });
                if( response.status === 200){
                    context.commit('updateProfileDate',response.data.user);
                }
                context.commit('stopSendRequest');
            } catch (error) {
                context.commit('setErr',{err: 'Some thing went wrong , please try again later !'});
            } 
    },async getMySalles(context){
        context.commit('sendRequest');
        const ip = context.getters.ip.getSalles;
        const token = context.getters.getToken.token;
        try {
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+ token},
            } );
            context.commit('stopSendRequest');
            if(response.status === 200){
                const resData = response.data;
                const salles = resData.data;
                context.commit('updateMySalles',salles);
            }else{
                throw new Error();
            }
        } catch (error) {
            context.commit('stopSendRequest');
            context.commit('setErr',{err: 'Some thing went wrong , please try again later !'});
        }
    }
};