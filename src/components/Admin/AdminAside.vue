<template>
    <aside class="admin-aside" > 
        <img @click="openList" class="admin-aside_btn " src="../../assets/System/Admin/Menu.png" alt="">
        <router-link v-if="routePath ==='/admin/home-products'" class="admin-aside_btn " to="/admin/home-products" >
            <img class="admin-aside_btn  " src="../../assets/System/Admin/home.png" alt="">
        </router-link>
        <router-link v-else  class="admin-aside_btn " to="/admin/home-users" >
            <img class="admin-aside_btn  " src="../../assets/System/Admin/home.png" alt="">
        </router-link>
        <router-link class="admin-aside_btn"  to="/admin/users" >
            <img class="admin-aside_btn" src="../../assets/System/Admin/users.png" alt="">
        </router-link>
        <router-link class="admin-aside_btn" to="/admin/notifications" > 
            <img class="admin-aside_btn" src="../../assets/System/Admin/notii.png" alt="">
        </router-link> 
        <router-link class="admin-aside_btn" to="/home" > 
            <img class="admin-aside_btn" src="../../assets/System/Admin/user page.png" alt="">
        </router-link> 
        <router-link class="admin-aside_btn last" to="/admin/info" >
            <img class="admin-aside_btn last" src="../../assets/System/Admin/info.png" alt="">
        </router-link>
        <div class="g-bk admin-bk" @click="closeList"   v-if="list"  ></div>
        <transition  name="left-slide" >
            <aside class="admin-aside_list" v-if="list" >
                <div  class="admin-aside_list-chat  " @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/Menu.png" alt="">
                    <p class="admin-aside_chat-text" > Close </p>
                </div>
                <router-link v-if="routePath ==='/admin/home-products'" to="/admin/home-products" class="admin-aside_list-chat"  @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/home.png" alt="">
                    <p class="admin-aside_chat-text" > Home </p>
                </router-link>
                <router-link v-else to="/admin/home-users" class="admin-aside_list-chat"  @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/home.png" alt="">
                    <p class="admin-aside_chat-text" > Home </p>
                </router-link>
                <router-link to="/admin/users" class="admin-aside_list-chat" @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/users.png" alt="">
                    <p class="admin-aside_chat-text" > users </p>
                </router-link>
                <router-link to="/admin/notifications" class="admin-aside_list-chat" @click="closeList"  >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/notii.png" alt="">
                    <p class="admin-aside_chat-text" > Notifications </p>
                </router-link>
                <router-link to="/home" class="admin-aside_list-chat" @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/user page.png" alt="">
                    <p class="admin-aside_chat-text" > User Home </p>
                </router-link>
                <router-link to="/admin/info" class="admin-aside_list-chat last" @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/info.png" alt="">
                    <p class="admin-aside_chat-text" > Info </p>
                </router-link>
            </aside>
        </transition>
    </aside>
</template>
<script>
export default {
    data(){
        return {
            list: false,
        };
    },methods:{
        openList(){
            this.list = true;
        },
        closeList(){
            this.list = !true;
        },
    },mounted(){
        this.userRoute;
    },computed: {
        routePath(){
            return this.$route.fullPath;
        }
    }
}
</script>