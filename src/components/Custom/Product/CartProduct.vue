<template>
    <div class="home-product" >
        <img v-if="imgUrl" class="home-product_img" :src="backIp+imgUrl" alt="">
        <img v-else class="home-product_img" src="../../../assets/logo.png" alt="">
        <h4 class="home-product_brand" >{{ brand }}</h4>
        <h4 class="home-product_title" >{{ name }}</h4>
        <h4 class="home-product_desc" >{{ desc }}</h4>
        <div class="home-product_footer">
            <p class="home-product_price">{{ price }}$</p>
            <i class="home-product_save-btn cart-product_btn -m" @click="minusProduct" >-</i>
            <p class="cart-product_qty" >{{qty}}</p>
            <i class="home-product_save-btn cart-product_btn -p" @click="plusProduct" >+</i>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    props:{
        brand:{
            default:'brand',
        },
        name:{
            default:'product name',
        },
        desc:{
            default:'product description',
        },
        price:{
            default: '0',
        },qty:{
            default: '0',
        },id:{
            default: null,
        },imgUrl:{

        }
    },setup(props){
        const store = useStore();
        const backIp = computed(()=> store.getters['authStore/ip'].raw);

        function plusProduct(){
            store.dispatch('CartStore/plusProduct',{id:props.id,price: props.price});
        }
        function minusProduct(){
            store.dispatch('CartStore/minusProduct',{id:props.id,price: props.price});
        }


        return{
            plusProduct,
            minusProduct,
            backIp
        };
    }
}
</script>