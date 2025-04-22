import { useStore } from "vuex";

export default async (to, from, next) => {
    const store = useStore();
    store.commit('authStore/getTokenLocal');
    let profile = store['getters']['authStore/getProfile'];
    if(!profile.firstName.length && !profile.lastName.length&& !profile.email.length ){
        await store.dispatch('authStore/getProfile');
        profile = store['getters']['authStore/getProfile'];
    }
    if(!profile.isAdmin){
        next({name: 'onlyAdmin'});
    }
    next();
    };