<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'favorate'" />
            <body class="g-home-page_body" :class="{'empty': favorateProduct.length>0?false:true}" >
                <home-section-headline v-if="favorateProduct.length" :label="'Favorate Products :'" />
                <home-section-headline v-else :label="'No Favorate Products'" />
                <div class="g-profile-page_product-box" >
                        <favorate-product 
                            v-for="one in favorateProduct" :key="one.id"
                            :name="one.name"
                            :desc="one.desc"
                            :price="one.price"
                            :qty="one.qty"
                            :id="one.id"
                            :imgUrl="one.img_url"
                            :brand="one.brand"
                        />
                </div>
            </body>
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import FavorateProduct from '@/components/Custom/Product/FavorateProduct.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, watch ,} from 'vue';

export default {
    components: {
        AppHeader,
        FavorateProduct,
        GroupHomeProduct,
        HomeSectionHeadline,
    },setup(){
        const store = useStore();
        const favorateProduct = computed(_=>store.getters['favorateProductsStore/getFavorateProducts']);
        
        onMounted(()=>{
            document.title = "Favorate Products";
            store.dispatch('favorateProductsStore/get');
        });

        const appLoader = ref(null);
        const appMsg = ref(null);

        const loadingPage = computed(()=>store.getters['favorateProductsStore/loadingPage']);

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
            favorateProduct,
            appLoader,
            appMsg,
        };

    },  
}
</script>