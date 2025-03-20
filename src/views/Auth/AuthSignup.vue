<template>
    <div class="page auth-page">
        <div class="page_container">
            <header class="auth-page_header" >
                <header-logo/>
            </header>
            <body class="auth-page_body" >
                <signup-form />
            </body>
        </div>
    </div>
    <app-loader  ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import HeaderLogo from '@/components/Global/HeaderLogo.vue';
import SignupForm from '@/components/Custom/Auth/SignupForm.vue';
import { ref , provide , computed  } from 'vue';

export default {
    components:{
        HeaderLogo,
        SignupForm,
    },
    computed: {
        
    },
    setup(){
        const appLoader = ref(null);
        const appMsg = ref(null);
        function openLoader(){
            appLoader.value.openLoader();
        }
        function closeLoader(){
            appLoader.value.closeLoader();
        }
        function msg(msg){
            appMsg.value.setMsg(msg);
        }
        provide('openLoader',openLoader);
        provide('closeLoader',closeLoader);
        provide('msg',msg);
        return{
            appLoader,
            appMsg,
        };
    },
}
</script>