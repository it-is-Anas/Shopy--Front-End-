export default {
    openLoadingPage(state){
        state.loadingPage = true;
    },
    closeLoadingPage(state){
        state.loadingPage = false;
    },
    refreshLatestProducts(state,latestProducts){
        state.latestProducts = latestProducts;
    },
    refreshTrendProducts(state,trendProducts){
        state.trendProducts = trendProducts;
    },
};