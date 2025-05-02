<template>
    <div class="home-product" >
        <img  class="home-product_img" :src="imgSrc" alt="">
        <!-- <h4 class="home-product_brand" >{{ brand }}</h4> -->
        <div class="home-product_name-price-box">
            <h4 class="home-product_title" >{{ name }}</h4>  
            <p class="home-product_price">{{ newPrice }}$</p>
        </div>
        <h4 class="home-product_desc" :class="[{'empty': !desc}]"  >{{ description }}</h4>
        <div class="home-product_footer">
            <div class="home-product-footer_rate-box">
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 1}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 2}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 3}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 4}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate === 5}]" ></i>
            </div>
            <div class="home-product-footer_btn-box">
                <i class="fa fa-heart home-product_save-btn" :class="[{'favorated':favorated}]" @click="addToFavorate()" ></i>
                <i class="home-product_add-to-cart fas fa-shopping-cart" @click="addToCart" ></i>
            </div>
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
            default: null,
            type: String
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
        },rate: {
            type: Number,
            default: 3,
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

        const description = computed(()=>{
            const desc = props.desc;
            if(desc){
                if(desc.length <= 136 ){
                    return desc;
                }
                const newDesc = desc.slice(0,134) + ' ...';
                return newDesc;
            }
            return 'DONT HAS A DESCRIPTION';
        });

        const newPrice = computed(()=>{
            const price = String(props.price);
            return price;
        });

        return{
            addToFavorate,
            addToCart,
            backIp,
            imgSrc,
            description,
            newPrice,
        };
    },mounted(){
    }
}
</script>