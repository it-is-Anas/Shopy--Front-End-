<template>
    <div class="g-menu-header">
        <i class="fa fa-plus" @click="toOpenProductPopup" ></i>
        <i class="fas fa-bell g-menu-header_notification-icon" @click="toOpenNotification" >
            <p v-if="unSeenedNotifications.length != 0" class="notification-icon_number-of-notification" >{{ unSeenedNotifications.length }}</p>
        </i>
        <i class="fas fa-shopping-cart" @click="toCartPage"  ></i>
        <i class="fa fa-bars" @click="toOpenMenu" ></i>
        <transition name="fade" >
            <div v-if="openProductPopUp" class="g-product-pop-up">
                <div class="g-close-btn-for-mobile" @click="toCloseProductPopup" >+</div>
                <div class="g-product-pop-up_title">Create Product :</div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Product Name:</div>
                    <input type="text" v-model="productName" placeholder="Ice Creem" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Brand :</div>
                    <input type="text" v-model="productBrand" placeholder="shopy" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label" >Price:</div>
                    <input type="text" v-model="productPrice" placeholder="3.1" class="g-product_input">
                </div>
                <div style="display: none" class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Quentity:</div>
                    <input type="text" v-model="productQty" placeholder="2" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Product Picture:</div>
                    <input ref="productFile" @change="onFileChange"  type="file" placeholder="2" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box  desc ">
                    <div class="g-product-pop-up_label">Product description:</div>
                    <!-- <input type="text"> -->
                    <textarea class="g-product_input" v-model="productDesc" placeholder="Product Description ..." ></textarea>
                </div>
                <div class="g-product-pop-up_btn-box">
                    <button class="user-cart_btn-sec user-cart_btn-sec"  @click="toCloseProductPopup" >Cancel</button>
                    <button class="user-cart_btn-sec user-cart_btn-main" @click="createProduct" >Create</button>
                </div>
            </div>
        </transition>
        <!-- ================= -->
        <div v-if="openProductPopUp" @click="toCloseProductPopup" class="g-bk bk-notfication g-bk-product"  ></div>
        <transition name="fade" >
            <div v-if="openNotification" class="g-notification-menu">
                <p v-for="one in notifications" :key="one.id" @click="makeNotificationSeen(one.id)" class="g-notification" :class="{'seen': one.seen}" >{{ one.content }}</p>
            </div>
        </transition>
        <div v-if="openNotification" class="g-close-btn-for-mobile" @click="toCloseNotification"  >+</div>
        <div  v-if="openNotification" class="g-bk bk-notfication" @click="toCloseNotification" ></div>
        <!-- ================= -->
        <transition name="header-menu" >
            <div v-if="openMenu" class="g-menu-header_menu" >
                <header-logo />
                <menu-header-btn :active="active==='home'" :label="'Home'" :to="'/home'" />
                <menu-header-btn :active="active==='cart'" :label="'Cart'" to="/cart" />
                <menu-header-btn :active="active==='order'" :label="'Order'" to="/order" />
                <menu-header-btn :active="active==='favorate'" :label="'Favorate'" to="/favorate" />
                <menu-header-btn :active="active==='profile'" :label="'profile'" :to="'/profile'" />
                <menu-header-btn @click="logout" :active="active==='logout'" :label="'Log out'" to="/log-in" />
                <div class="g-close-btn-for-mobile" @click="toCloseMenu" >+</div>
                <teleport to='body' ><div @click="toCloseMenu" class="g-bk"></div></teleport>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref , watch , computed , onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogo from '@/components/Global/HeaderLogo.vue';
import MenuHeaderBtn from '@/components/Custom/Buttons/MenuHeaderBtn.vue';
import { useStore } from 'vuex';

export default {
    components: {
        HeaderLogo,
        MenuHeaderBtn,
    },props:{
        active:{},
    },
    setup(){
        const store = useStore();
        const notifications = computed(()=> store.getters['notificationStore/getNotifications']);
        const unSeenedNotifications = computed(()=> store.getters['notificationStore/getUnSeened']);
        store.dispatch('notificationStore/getMyNotfications');

        function makeNotificationSeen(id) {
            store.dispatch('notificationStore/makeNotificationSeen',{id});
        }

        const productName = ref('');
        const productDesc = ref('');
        const productPrice = ref('');
        const productQty = ref(1);
        const productBrand = ref('');

        let productFileImg = ref(null);

        function onFileChange(event) {
            productFileImg.value = event.target.files[0];
        }

        async function createProduct(){
            const formData = new FormData();
            formData.append('productImg', productFileImg.value);
            formData.append('name', productName.value);
            formData.append('desc', productDesc.value);
            formData.append('price', productPrice.value);
            formData.append('qty', productQty.value);
            formData.append('brand', productBrand.value);
            await store.dispatch('myProductStore/create',formData);
            toCloseProductPopup();
        }
        
        const openMenu = ref(false);
        const openNotification = ref(false);
        const openProductPopUp = ref(false);
        const router = useRouter();  
        const productFile = ref(null);
        function toOpenMenu(){
            openMenu.value=true;
        }
        function toCloseMenu(){
            openMenu.value=false;
        }
        function toOpenNotification(){
            openNotification.value = true;
        }
        function toCloseNotification(){
            openNotification.value = !true;
        }
        function toCartPage(){
            router.push('/cart');
        }
        function logout(){
            store.commit('authStore/logout');
            router.push('/log-in');
        }
        function toOpenProductPopup(){
            openProductPopUp.value = true;
        }
        function toCloseProductPopup(){
            openProductPopUp.value = !true;
        }
            


        return{
            openMenu,
            openNotification,
            openProductPopUp,
            productFile,
            toOpenMenu,
            toCloseMenu,
            toCartPage,
            logout,
            toOpenNotification,
            toCloseNotification,
            toOpenProductPopup,
            toCloseProductPopup,
            notifications,
            makeNotificationSeen,
            productName,
            productDesc,
            productQty,
            productPrice,
            productBrand,
            createProduct,
            unSeenedNotifications,
            onFileChange,
        };
    },
}
</script>