<template>
    <div class="page user-home err-page-404" >
        <h1>Sorry Only admin can reach this page</h1>
    </div>
</template>
<script>
    import MenuHeader from '@/components/Custom/Buttons/AuthFormBtnLink.vue';
    import { useStore } from 'vuex';
    export default{
        components:{
            MenuHeader,
        },
        setup(){
            const store = useStore();
            
        },
    }
</script>