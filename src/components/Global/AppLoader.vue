<template>
    <transition>
        <div class="page-loader" v-if="open" >
            <div class="page-loader_l l1" ref="l1" ></div>
            <div class="page-loader_l l2" ref="l2" ></div>
            <div class="page-loader_l l3" ref="l3"></div>
        </div>
    </transition>   
</template>
<script>
import { ref } from 'vue';
export default {
    setup(){
        const l1 = ref(null) , l2 = ref(null) , l3 = ref(null);
        const open = ref(false);  
        function openLoader(){
            open.value = true;
        }
        function closeLoader(){
            setTimeout(() => {
                open.value = false;
            }, 500);
        }
        return{
            open,
            openLoader,
            closeLoader,
            l1,
            l2,
            l3,
        };
    },
}
</script>