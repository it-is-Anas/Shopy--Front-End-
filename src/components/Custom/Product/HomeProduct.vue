<template>
    <div class="home-product" >
        <img  class="home-product_img" :src="imgSrc" alt="">
        <h4 class="home-product_brand" >{{ brand }}</h4>
        <h4 class="home-product_title" >{{ name }}</h4>  
        <h4 class="home-product_desc" >{{ desc }}</h4>
        <div class="home-product_footer">
            <p class="home-product_price">{{ price }}$</p>
            <i class="fa fa-heart home-product_save-btn" :class="[{'favorated':favorated}]" @click="addToFavorate()" ></i>
            <p class="home-product_add-to-cart" @click="addToCart" >add to cart</p>
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
        },id:{
            default: null,
        },imgUrl:{
            default: null,
            type: String,
        },favorated:{
            type: Boolean,
            default: false
        }
    },setup(props,){
        const store = useStore();
        function addToFavorate(){
            store.dispatch('favorateProductsStore/create',{id: props.id});
        }
        function addToCart(){
            store.dispatch('homeProductStore/addToCart',{id: props.id});
        }
        const backIp = computed(()=> store.getters['authStore/ip'].raw);


        const imgSrc = computed(()=>{
            if(props.imgUrl){
                return backIp.value + props.imgUrl;
            }
            return require('@/assets/logo.png');
        });

        return{
            addToFavorate,
            addToCart,
            backIp,
            imgSrc,
        };
    },mounted(){
    }
}
</script>