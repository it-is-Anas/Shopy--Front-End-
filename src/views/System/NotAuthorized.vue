<template>
    <div class="page user-home err-page-404" >
        <img class="err-404_img" src="../../assets/System/NotAuth.png" alt="">
        <p class="home-product_title" >Not Authorized 401</p>
        <MenuHeader label="Log in Page" to="/log-in" />
    </div>
</template>
<msg ref="msg" />
<script>
    import MenuHeader from '@/components/Custom/Buttons/AuthFormBtnLink.vue';
    export default{
        components:{
            MenuHeader,
        },
        setup(){

        },
    }
</script>