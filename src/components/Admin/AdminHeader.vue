<template>
    <header class="admin-header" > 
        <HeaderLogo />
        <img @click="openMobieMenu" src="../../assets/System/Admin/Menu.png" alt="" class="admin-menu-logo">
    </header>    
    <transition name="fade" >
        <div class="admin-header-mobile-menu" v-if="mobileMenu" >
            <div class="admin-header-mobile-menu_box">
                <span class="admin-header-mobile-menu_close" @click="closeMobieMenu" >+</span>
                <MobileMenuBtn @click="closeMobieMenu" label="Home" :img="'home.png'" :url="'/admin/home-users'" />
                <MobileMenuBtn @click="closeMobieMenu" label="Users" :img="'users.png'" :url="'/admin/users'" />
                <MobileMenuBtn @click="closeMobieMenu" label="Notifications" :img="'notii.png'" :url="'/admin/notifications'" />
                <MobileMenuBtn @click="closeMobieMenu" label="Info" :img="'info.png'" :url="'/admin/info'" />
                
            </div>
        </div>
    </transition>
</template>
<script>
    import HeaderLogo from '../Global/HeaderLogo.vue';
    import MobileMenuBtn from './MobileMenu/MobileMenuBtn.vue';
    export default {
        components:{
            MobileMenuBtn,
            HeaderLogo,
        },data(){
            return {
                mobileMenu: false, 
            };
        },methods:{
            openMobieMenu(){
                this.mobileMenu = true;
            },
            closeMobieMenu(){
                this.mobileMenu = false;
            },
        }
    }
</script>