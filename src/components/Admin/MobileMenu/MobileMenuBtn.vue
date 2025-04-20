<template>
    <router-link :to="url" class="admin-header-mobile-menu_btn-box">
        <img :src="imgUrl" alt="" class="admin-header-mobile-menu_btn-box-img">
        <p class="admin-header-mobile-menu_btn-box-label" >{{ label }}</p>
    </router-link>
</template>
<script>
    export default {
        props:{
            img:{
                type: String,
                default: '',
            },label:{
                type: String,
                default: 'Label'
            },url:{
                type: String,
                default: 'Label'
            }
        },computed: {
            imgUrl(){
                return this.img?require('@/assets/System/Admin/'+this.img):'';
            }
        }
    }
</script>