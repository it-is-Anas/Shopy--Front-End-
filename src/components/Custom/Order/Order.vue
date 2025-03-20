<template>
    <div class="user-cart_order ">
        <input class="cart-order_check-box" type="checkbox" >
        <div class="cart-order_details">
            <p class="cart-order_ref">Oreder -{{ id }}- sh</p>
            <p class="cart-order_date">{{ dayName }} {{fullDate}}  </p>
        </div>
        <button class="user-cart_btn-sec cart-order_btn-sec">See detailes</button>
        <button class="user-cart_btn-sec user-cart_btn-main cart-order_btn-main">Download</button>
        <!-- <i class="fas fa-ellipsis-v cart-order_menu-btn" ></i> -->
    </div>
</template>
<script>
export default {
    props:{
        id:{
            default: null,
        },createdAt:{

        },
    },setup(props){
        const date = new Date(props.createdAt);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${date.getHours()>12?'Am':'Pm'}`

        return{
            dayName,
            fullDate,    
        };
    }
}
</script>