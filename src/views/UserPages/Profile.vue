<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <app-header :active="'profile'" />
            <div class="g-home-page_body g-profile-body"   >
                <div class="g-profile-page_user-details"  >
                    <img src="../../assets/User/Cover.jpeg" alt="" class="g-profile-page_cover" />
                    <div  class="g-profile-page-profile_box" >
                        <div  class="g-profile-page-profile-box_content" >
                            <img @contextmenu.prevent="openProfileContextMenu" v-if="profile.imgUrl" :src="backIp+profile.imgUrl"  alt="" class="g-profile-page_profile-picture" />
                            <img @contextmenu.prevent="openProfileContextMenu" v-else src="../../assets/User/Profile.png"  alt="" class="g-profile-page_profile-picture" />                        
                    </div>
                    <transition name="fade" >                    
                        <div class="g-profile-page-profile-box_context-menu" v-if="profileContextMenu" >
                            <p class="g-profile-page-profile-box-context-menu_btn">Open</p>    
                            <p @click="picUploader.click()" class="g-profile-page-profile-box-context-menu_btn">Upload</p>    
                        </div>
                    </transition>
                    <transition name="fade" >                                            
                        <div @click="closeProfileContextMenu" v-if="profileContextMenu" class="g-bk bk-notfication g-bk-product"></div>
                    </transition>
                    </div>
                    <p class="g-profile-page_user-name">{{ profile.firstName }} {{ profile.lastName }}</p>
                </div> 
                <div class="g-profile-page_filter-bar">
                    <!-- <p  @click='changeTab(1)'  :class="{active:tab===1}"  class="g-profile-page_tab ">Info</p> -->
                    <p  @click='changeTab(2)'  :class="{active:tab===2}" class="g-profile-page_tab">My Products</p>
                    <p  @click='changeTab(3)'  :class="{active:tab===3}" class="g-profile-page_tab">My Salles</p>
                </div>
                    <div v-if="tab === 1" class="g-profile-page_product-box content"  >
                        <p>nothing </p>
                    </div>
                    <div v-if="tab === 2" class="g-profile-page_product-box content" :class="{'empty': myProduct.length>0?false:true}" >
                        <ProfileProduct v-for="product in myProduct" :id="product.id" :qty="product.qty" :name="product.name" :desc="product.desc" :price="product.price" :imgUrl="product.img_url" :key="product.id" :brand="product.brand" />
                    </div>
                    <div v-if="tab === 3" class="g-profile-page_product-salles content" :class="{'empty': 100>0?false:true}" >
                        <ProfileProductSell v-for="sale in mySales" :key="sale.id" :productName="sale.name" :qty="sale.qty" />
                    </div>
            </div>
        </div>
        <input style="display: none;" ref="picUploader" type="file" @change="handleFileUpload" />
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import { ref , computed, watch, onMounted } from 'vue';
import AppHeader from '@/components/Global/User/AppHeader.vue';
import ProfileProduct from '@/components/Custom/Product/ProfileProduct.vue';
import ProfileProductSell from '@/components/Custom/ProductSell/ProfileProductSell.vue';
import { useStore } from 'vuex'; 
import axios from 'axios';
export default {
    components:{
        AppHeader,
        ProfileProduct,
        ProfileProductSell,
    },
    setup(){
        const store = useStore();
        onMounted(async ()=>{
            document.title = "User Profile";
            store.dispatch('myProductStore/get');
            await store.dispatch('authStore/getProfile');
        });
        const backIp = computed(()=> store.getters['authStore/ip'].raw);
        const myProduct = computed(()=> store.getters['myProductStore/getMyProduct']);
        const loadingAuth = computed(()=>store.getters['authStore/getsendingRequest']);
        const loadingPageMyProduct = computed(()=> {
            return store.getters['myProductStore/loadingPage'];
        });

        const loadingPage = computed((val)=> {
            return loadingAuth.value||loadingPageMyProduct.value;
        });

        const appMsg = ref(null);
        function msg(msg,time=500){
            appMsg.value.setMsg(msg,time);
        }
        const appLoader = ref(null);
        watch(loadingPage,(val)=>{
            if (val) {
                if (appLoader.value) {
                    appLoader.value.openLoader();
                    msg('Loading...');
                }
            } else {
                if (appLoader.value) {
                    appLoader.value.closeLoader();
                }
            }
        });
        
        const profile = computed(()=>store.getters['authStore/getProfile']);
        
        
        const tab = ref(2);
        function changeTab(num){
            tab.value = num;
        }

        watch(tab,async val=>{
            if(val === 3){
                await store.dispatch('authStore/getMySalles');
            }
        });

        const picUploader= ref(null);
        const img = ref(null);
        async function handleFileUpload(event){
            img.value = event.target.files[0];
            if (!img.value) {
                alert("Please select a file first!");
                return;
            }
            let formData = new FormData();
            formData.append("image", img.value);
            store.dispatch('authStore/updateProfilePicture',formData);
        };
        const mySales = computed(()=>store.getters['authStore/getMySalles']);

        const profileContextMenu = ref(false);
        function openProfileContextMenu(){
            profileContextMenu.value = true;
        }
        function closeProfileContextMenu(){
            profileContextMenu.value = false;
        }
        return{ 
            appMsg,
            tab,
            changeTab,
            myProduct,
            appLoader,
            profile,
            picUploader,
            handleFileUpload,
            backIp,
            mySales,
            profileContextMenu,
            openProfileContextMenu,
            closeProfileContextMenu
        };
    },
}
</script>