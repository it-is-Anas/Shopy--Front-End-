import { useStore } from "vuex";

export default async (to,from,next)=>{
    const fullBath = to.fullPath;
    if(fullBath === '/log-in' || fullBath === '/sign-up' || fullBath === '/err-not-found' || fullBath === '/err-not-auth' || fullBath === '/blocked-403'){
        next();
    }else{
        const store = useStore();
        store.commit('authStore/getTokenLocal');
        const token = store['getters']['authStore/getToken'].token;
        console.log(token);
        if(!token.length){
            next({name:'notAuth'});//not auth please sign up
        }
        else{
        //check if blocked
        let profile = store['getters']['authStore/getProfile'];
        if(!profile.firstName && !profile.lastName && profile.email && profile.blocked === null){
            await store.dispatch('authStore/getProfile');
            profile = store['getters']['authStore/getProfile'];
        }
        if(profile.blocked){
            next({name: 'blocked403'});// sorry you r blocked
        }
            next();
        }
    }
    };