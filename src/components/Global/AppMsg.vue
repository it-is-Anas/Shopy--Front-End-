<template>
    <transition>
        <p class="g-msg" v-if="open" >
            {{ msg }}
        </p>
    </transition>
</template>
<script>
import { ref , watch  } from 'vue';
export default {
    setup(){
        const msg = ref('hello');
        const dTime = ref(3000);
        const open = ref(false);
        function setMsg (newMsg,time){
            msg.value = newMsg;
            open.value = true;
            setTimeout(() => {
                open.value = false;
            }, parseFloat(time) || dTime.value);
        }
        return{
            msg,
            open,
            setMsg,
        };  
    },
}
</script>