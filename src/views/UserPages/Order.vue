<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'order'" />
            <body class="g-home-page_body cart-page" :class="{'empty': orders.length>0?false:true}" >
                <home-section-headline v-if="orders.length" :label="'Orders :'" />
                <home-section-headline v-else :label="'There is No Orders :'" />
                <Order v-for="one in orders " :key="one.id" :id="one.id" :created-at="one.createdAt" />
            </body>
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import Order from '@/components/Custom/Order/Order.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, watch } from 'vue';
export default {
    components:{
        AppHeader,
        HomeSectionHeadline,
        Order,
    },setup(){
        const store = useStore();
        onMounted(()=>{
            document.title = "Orders";
            store.dispatch('orderStore/getOrders');
        });
        const orders = computed(()=>store.getters['orderStore/getOrders']);
        const loadingPage = computed(()=>store.getters['orderStore/loadingPage']);
        const appLoader = ref(null);
        const appMsg = ref(null);

        function msg(msg,time=500){
            appMsg.value.setMsg(msg,time);
        }

        watch(loadingPage,(val)=>{
            if(val){
                appLoader.value.openLoader();
                msg('Loading...',);
            }else{
                appLoader.value.closeLoader();
            }
        });
        
        return{
            orders,
            appLoader,
            appMsg,

        };
    }
}
</script>