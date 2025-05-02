<template> 
    <div class="g-menu-header">
        <i class="fa fa-plus" @click="openProductPopUp" ></i>
        <i class="fas fa-bell g-menu-header_notification-icon" @click="toOpenNotification" >
            <p v-if="unSeenedNotifications.length != 0" class="notification-icon_number-of-notification" >{{ unSeenedNotifications.length }}</p>
        </i>
        <i class="fas fa-shopping-cart" @click="toCartPage"  ></i>
        <i class="fa fa-bars" @click="toOpenMenu" ></i> 
        <!-- create product pop up -->
            <CreateProductPop ref="createProductPopUp" />
        <!-- ================= -->
        <transition name="fade" >
            <div v-if="openNotification" class="g-notification-menu">
                <div class="g-notification-menu_head-line">
                    <h3 class="" >Notification :</h3>
                    <h3 v-if="unSeenedNotifications.length" class="g-notification-menu-head-line_number-un-seen-nots" >{{ unSeenedNotifications.length }}</h3>
                </div>
                <div class="">
                    <UserNotification  
                    v-for="one in notifications"  
                    :key="one.id" 
                    @click="makeNotificationSeen(one.id)" 
                    :id="one.id"
                    :content="one.content" 
                    :seen="one.seen"
                    />
                </div>
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
import CreateProductPop from '@/components/Custom/ProductPopUp/CreateProductPop.vue';
import UserNotification from '@/components/Custom/Notification/UserNotification.vue';
export default {
    components: {
        HeaderLogo,
        MenuHeaderBtn,
        CreateProductPop,
        UserNotification,
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


        const openMenu = ref(false);
        const openNotification = ref(false);
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
        const createProductPopUp = ref(null);
        function openProductPopUp (){
            createProductPopUp.value.toOpenProductPopup();
        }

        return{
            openMenu,
            openNotification,
            createProductPopUp,
            openProductPopUp,
            productFile,
            toOpenMenu,
            toCloseMenu,
            toCartPage,
            logout,
            toOpenNotification,
            toCloseNotification,
            notifications,
            makeNotificationSeen,
            unSeenedNotifications,
        };
    },
}
</script>