export default {
    setErr(state,payload){
        state.errValidation = payload.err;
        setTimeout(() => {
            state.errValidation = null;
        }, 2000);
    },
    sendRequest(state){
        state.sendingRequest = true;
    },
    stopSendRequest(state){
        state.sendingRequest = false;
    },
    updateLocalDate(state,payload){
        state.firstName = payload.firstName ;
        state.lastName = payload.lastName  ;
        state.email = payload.email ;
        state.password = payload.password  ;
        state.birthDay = payload.birthDay  ;
        state.gender = payload.gender  ;
        state.id = payload.id  ;
        state.imgUrl =  payload.img_url  ;
    },
    updateProfileDate(state,payload){
        state.firstName = payload.first_name ;
        state.lastName = payload.last_name  ;
        state.email = payload.email ;
        state.password = payload.password  ;
        state.birthDay = payload.birth_day  ;
        state.gender = payload.gender  ;
        state.id = payload.id  ;
        state.imgUrl = payload.img_url  ;
    }
    ,updateLocalDateLogIn(state,payload){
        state.email = payload.email;
        state.password = payload.password ;
    },signUpSuccessfuly(state,payload){
        state.logged = true;
        state.token = payload.token;
        state.firstName = payload.first_name;
        state.lastName = payload.last_name;
        state.grender = payload.grender;
        state.birthDay = payload.birth_day; 
    },saveToLocal(state){
        //localStorage.getItem('token')
        const token = state.token;
        localStorage.setItem('token',token);
    },getTokenLocal(state){
        const token = localStorage.getItem('token');
        state.token = token;
    },logout(){
        localStorage.removeItem('token');
    },
    updateMySalles(state,mySalles){
        state.mySalles  = mySalles;
    }
};