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
    },pointedAsAdmin(state,id){
        const users = state.users;
        for(let i = 0  ; i < users.length ; ++i){
            if(users[i].id === id){
                users[i].admin_id= 1;
            }
        }
        state.users = users;
    },unPointedAsAdmin(state,id){
        const users = state.users;
        for(let i = 0  ; i < users.length ; ++i){
            if(users[i].id === id){
                users[i].admin_id= null;
            }
        }
        state.users = users;
    },updateLocalProducts(state,products){
        state.products = products;
    },closeLoading(state){
        state.loading = false;
    },openLoading(state){
        state.loading = true;
    }
};