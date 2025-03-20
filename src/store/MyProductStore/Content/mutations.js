export default {
    openLoadingPage(state){
        state.loadingPage = true;
    },
    closeLoadingPage(state){
        state.loadingPage = false;
    },
    add(state,product){
        // .push(product);
        state.myProducts = [product,...state.myProducts];
    },refresh(state,myProducts){
        state.myProducts = myProducts;
    },update(state,prodcut){
        const result = [];
        const products = state.myProducts;
        for(let i = 0 ; i < products.length ; ++i){
            if(products[i].id === prodcut.id){
                result.push(prodcut);
            }else{
                result.push(products[i]);
            }
        }
        state.myProducts = result;
    },delete(state,product){
        const result = [];
        const products = state.myProducts;
        for(let i = 0 ; i < products.length ; ++i){
            if(products[i].id === product.id){

            }else{
                result.push(products[i]);
            }
        }
        state.myProducts = result;
    }
};