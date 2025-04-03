export default {
    refreshAll(state,products){
        state.favorateProducts= products;
    },
    refresh(state,product){
        state.favorateProducts.push(product);
    },delete(state,product){
        const result = [];
        const products = state.favorateProducts;
        for(let i = 0 ; i < products.length ; ++i){
            if(products[i].id === product.id){

            }else{ 
                result.push(products[i]);
            }
        }
        state.favorateProducts = result;
    },openLoadingPage(state){
        state.loadingPage = true;
    },
    closeLoadingPage(state){
        state.loadingPage = false;
    },updateHomeProduct(state,payload,s){
        console.log(state,payload,s)
    }
};