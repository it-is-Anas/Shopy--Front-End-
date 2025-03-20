import state from './state';
import getters from './getter';
import mutations from './mutations';
import actions from './actions';

const authStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default authStore;