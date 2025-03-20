export default {
    setCart(state,cart){
        state.cart = cart;
    },
    setCartProducts(state,payload){
        state.cartProducts = payload.products;
        state.cartSum = payload.cartSum;
        console.log(state);
    },increaseProduct(state,payload){
        const products = state.cartProducts ;
        for(const productAction of products){
            if(productAction.id == payload.id){
                productAction.qty=1 +  +productAction.qty;
            }
        }
        state.cartSum=+state.cartSum + +payload.price;
        state.cartProducts =  products;
    },decreaseProduct(state,payload){
        let empty = 0 ;
        const products = state.cartProducts ;
        for(const productAction of products){
            if(productAction.id == payload.id){
                productAction.qty=  +productAction.qty - 1;
            }
            if(!productAction.qty){
                empty= true;
        }
        state.cartSum=+state.cartSum - +payload.price;
        if(empty){
            const newCartProduct = [];
            for(const productAction of products){
                if(productAction.id != payload.id){
                    newCartProduct.push(productAction);
                }
            }  
            state.cartProducts = newCartProduct;
        }else 
            state.cartProducts =  products;
        }
    },clearCart(state){
        state.cartProducts = [];
        state.cartSum = 0;
    },openLoadingPage(state){
        state.loadingPage = true;
    },
    closeLoadingPage(state){
        state.loadingPage = false;
    },
}; 