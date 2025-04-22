<template>
    <div class="admin-product-card" >
        <img width="160px" :src="imgSrc" alt="" class="admin-product-card-img">
        <p class="admin-product-card-user-name" >{{ brand }}</p>
        <p class="admin-product-card-product-name">{{ name }}</p>
        <p class="admin-product-card-product-desc">{{ desc }}</p>
        <p class="admin-product-card-product-date"> {{ +date.getDay() + 1 }} - {{ +date.getMonth()+1 }} - {{ date.getFullYear() }} | {{ date.getHours() }} : {{ date.getMinutes() }} {{  date.getHours() >= 12 ? 'PM':'AM' }}</p>
    </div>
</template>
<script>

export default {
    props:{
        brand: {
            default: 'Brand',
            type: String,
        },
        name: {
            default: 'Name',
            type: String,
        },
        desc: {
            default: 'Name',
            type: String,
        },
        datee:{
            default: new Date(),
            type: Date,
        },
        imgUrl:{
            default: null,
            type: String,
        },
    },computed:{
        backIp(){ return this.$store.getters['authStore/ip'].raw;},
        imgSrc(){
            if(this.imgUrl){
                return this.backIp + this.imgUrl;
            }else 
                return require('@/assets/prodexmp.jpg');
        },date(){
            return new Date(this.datee);
        }
    }
}
</script>