export default {
    refresh(state,orders){
        state.orders = orders;
    },openLoadingPage(state){
        state.loadingPage = true;
    },
    closeLoadingPage(state){
        state.loadingPage = false;
    },
};