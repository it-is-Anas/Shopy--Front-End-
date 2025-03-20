<template>
    <div class="g-profile-page_product-sell">
        <input type="checkbox" v-model="checkbox" class="">
        <p class="g-profile-page_label-product-sell">You have sold {{ qty }} pc's of {{ productName }}</p>        
        <i class="fas fa-ellipsis-v cart-order_menu-btn prfoile"></i>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    props:{
        productName:{
            type: String,
            default: 'Product name',
        },
        qty:{
            type: Number,
            default: 1,
        }
    },setup(){
        const checkbox = ref(false);



        return{
            checkbox,
        };
    }
}
</script>