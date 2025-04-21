export default {
    updateLocalUsers(state,users){
        state.users = users
    }
    ,blockUser(state,id){
        const users = state.users;
        for(let i = 0  ; i < users.length ; ++i){
            if(users[i].id === id){
                users[i].blocked= 1;
            }
        }
        state.users = users;
    },unBlockUser(state,id){
        const users = state.users;
        for(let i = 0  ; i < users.length ; ++i){
            if(users[i].id === id){
                users[i].blocked= 0;
            }
        }
        state.users = users;
    },
};