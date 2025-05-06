<template>
    <div class="user-cart_order">
        <p class="g-profile-page_label-product-sell">You have sold {{ qty }} pc's of {{ productName }}</p> 
        <p class="cart-order_date" v-if="createdAt" >{{ dayName }} {{fullDate}}  </p>
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
        },createdAt:{
            default: null,
            type:Date
        }, 
    },setup(props){
        const checkbox = ref(false);

        const date = new Date(props.createdAt);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${date.getHours()>12?'Am':'Pm'}`



        return{
            checkbox,
            dayName,
            fullDate,
        };
    }
}
</script>