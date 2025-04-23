<template>
    <div class="admin-notification-card" >
        <img  class="admin-notification-card-img" :src="imgSrc" alt="" >
        <div class="admin-notification-card-text">
            <h5 class="admin-notification-card-name">{{ name }}</h5>
            <p class="admin-notification-card-content">
                {{ content }}
            </p>
        </div>
        <p class="admin-notification-card-date">{{ +date.getDay() + 1 }} - {{ +date.getMonth()+1 }} - {{ date.getFullYear() }} | {{ date.getHours() }} : {{ date.getMinutes() }} {{  date.getHours() >= 12 ? 'PM':'AM' }}</p>
    </div>
</template>
<script>
export default {
    props:{
        name: {
            default: 'Admin Name',
            type: String,
        },
        content: {
            default: 'Desc...',
            type: String,
        },datee: {
            default: 'Desc...',
            type: String,
        },
        imgUrl:{
            default: null,
            type: String,
        },
    },computed: {
        backIp(){ return this.$store.getters['authStore/ip'].raw;},
        imgSrc(){
            if(this.imgUrl){
                return this.backIp + this.imgUrl;
            }else 
                return require('@/assets/notiexp.jpg');
        },
        date(){
            return new Date(this.datee);
        }
    }
}
</script>