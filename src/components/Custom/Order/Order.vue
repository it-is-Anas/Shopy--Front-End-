<template>
    <div class="user-cart_order ">
        <div class="cart-order_details">
            <p class="cart-order_ref">Oreder -{{ id }}- sh</p>
        </div>
        <p class="cart-order_date">{{ dayName }} {{fullDate}}  </p>
    </div>
</template>
<script>
export default {
    props:{
        id:{
            default: null,
        },createdAt:{
            default: null,
            type:Date
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