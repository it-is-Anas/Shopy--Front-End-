<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'home'" />
            <body class="g-home-page_body" :class="{'empty': (!trendProducts.length &&tab === 1)||(!latestProducts.length &&tab === 2) }" >
                <div class="g-profile-page_filter-bar">
                    <p  @click='changeTab(1)'  :class="{'active':tab===1}"  class="g-profile-page_tab ">Trends</p>
                    <p  @click='changeTab(2)'  :class="{active:tab===2}"  class="g-profile-page_tab ">New Products</p>
                </div>
                <span v-if="tab === 1" >
                    <home-section-headline v-if="trendProducts.length" label="Trends Products :"  />
                    <div class="g-profile-page_product-box" >
                                <home-product v-for="one in trendProducts" :key="one.id" 
                                    :id="one.id"
                                    :name="one.name"
                                    :desc="one.desc"
                                    :price="one.price"
                                    :qty="one.qty"
                                    :imgUrl="one.img_url"
                                    :brand="one.brand"
                                />
                    </div>
                </span>
                <span v-if="tab === 2" >
                    <home-section-headline v-if="latestProducts.length" label="Latest Products :"  />
                    <div class="g-profile-page_product-box" >
                                <home-product v-for="one in latestProducts" :key="one.id" 
                                    :id="one.id"
                                    :name="one.name"
                                    :desc="one.desc"
                                    :price="one.price"
                                    :qty="one.qty"
                                    :imgUrl="one.img_url"
                                    :brand="one.brand"
                                />
                    </div>
                </span>
            </body>
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>


import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeProduct from '@/components/Custom/Product/HomeProduct.vue';
import HomeSpecailProduct from '@/components/Custom/Product/HomeSpecailProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import {ref,computed,watch , onMounted} from 'vue';
import { useStore } from 'vuex';
export default {
    components:{
        AppHeader,
        HomeProduct,
        HomeSpecailProduct,
        HomeSectionHeadline,
        GroupHomeProduct,
    },
    setup(){
        const store = useStore();

        const latestProducts = computed(() => store.getters['homeProductStore/latestProducts']);
        const trendProducts = computed(() => {return store.getters['homeProductStore/trendProducts']});



        const tab = ref(1);
        // changeTab(1);


        function changeTab(index){
            tab.value = index;
            if(tab.value === 2){
                if(!latestProducts.value.length)
                    getLatestProducts();
            }else if(tab.value === 1){
                if(!trendProducts.value.length)
                    getTrendProducts();
            }
        }
        

        function getLatestProducts(){
            store.dispatch('homeProductStore/latestProducts');
        }
        
        function getTrendProducts(){
            store.dispatch('homeProductStore/trendProducts');
        }


        
        onMounted(() => {
            document.title = "Home";
            
            if(!trendProducts.value.length)
                store.dispatch('homeProductStore/trendProducts');
                // console.log(store.getters['homeProductStore/getToken']);// to get a token 
            });
        const appMsg = ref(null);
        function msg(msg,time){
            appMsg.value.setMsg(msg,time);
        }    

        const appLoader = ref(null);
        const homeLoadingPage = computed(()=> store.getters['homeProductStore/loadingPage']);
        const myProductLoadingPage = computed(()=> store.getters['myProductStore/loadingPage']);
        const loadingPage = computed(()=> homeLoadingPage.value || myProductLoadingPage.value );
    

        watch(loadingPage,(val)=>{
            if(val){
                appLoader.value.openLoader();
                msg('Loading...',500);
            }else{
                appLoader.value.closeLoader();
            }
        });

        return{
            tab,
            changeTab,
            latestProducts,
            trendProducts,
            appLoader,
            appMsg,
        };
    },
}
</script>