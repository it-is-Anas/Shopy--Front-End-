<template>
    <router-link class="auth-form_link"  :to="to" > {{ label }} </router-link>
</template>
<!--  @click="clickHandler"  -->
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    props:{
        to:{
            default: '/'
        },label:{
            default: 'link'
        }
    },setup(props,){
        const link = ref(props.to);
        const router = useRouter();

        function clickHandler(){
            if(link.value)
                router.push(link.value);
        }

        return{
            clickHandler,
        };

    }
}
</script>