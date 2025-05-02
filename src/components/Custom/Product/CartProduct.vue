<template>
    <div class="home-product" >
        <img  class="home-product_img" :src="imgSrc" alt="">
        <div class="home-product_name-price-box">
            <h4 class="home-product_title" >{{ name }}</h4>  
            <p class="home-product_price">{{ price }}$</p>
        </div>
        <!-- <h4 class="home-product_brand" >{{ brand }}</h4> -->
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
                <div class="home-product_footer">
                    <i class="home-product_save-btn cart-product_btn -m" @click="minusProduct" >-</i>
                    <p class="cart-product_qty" >{{qty}}</p>
                    <i class="home-product_save-btn cart-product_btn -p" @click="plusProduct" >+</i>
                </div>
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
        },qty:{
            default: '0',
        },id:{
            default: null,
        },imgUrl:{
            default: null,
            type: String,
        },rate: {
            type: Number,
            default: 3,
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

        return{
            plusProduct,
            minusProduct,
            backIp,
            description,
            imgSrc
        };
    }
}
</script>