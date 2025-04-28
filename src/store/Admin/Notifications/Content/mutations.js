export default {
    updateLocalNots(state,nots){
        state.nots = nots;
    },createNot(state,not){
        const nots = [not,...state.nots];
        state.nots= nots;
    },closeLoading(state){
        state.loading = false;
    },openLoading(state){
        state.loading = true;
    },setMsg(state,msg){
        state.msg = msg;
    }
};