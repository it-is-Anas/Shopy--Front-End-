<template>
    <button @click="clickLink" class="auth-form_btn link" :class="{'active':active}" @click.prevent="" >
        <router-link ref="link" class="auth-form-btn_link"  :to="to" >
            {{ label }}
        </router-link>
    </button>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    props:{
        label:{
            default: 'button',
        },
        to:{
            default: '',
        },active:{
            default: false,
        }
    },  
    setup(props){
        const router = useRouter();
        function clickLink(){
            if (props.to) {
                router.push(props.to); // Navigate programmatically
            }
        }
        return{
            clickLink,

        }
    },
}
</script>