<template>
    <aside class="admin-aside" >
        <img @click="openList" class="admin-aside_btn" src="../../assets/System/Admin/Menu.png" alt="">
        <img class="admin-aside_btn" src="../../assets/System/Admin/home.png" alt="">
        <img class="admin-aside_btn" src="../../assets/System/Admin/users.png" alt="">
        <img class="admin-aside_btn" src="../../assets/System/Admin/notii.png" alt="">
        <img class="admin-aside_btn last" src="../../assets/System/Admin/info.png" alt="">
        <div class="g-bk admin-bk" @click="closeList"   v-if="list"  ></div>
        <transition  name="left-slide" >
            <aside class="admin-aside_list" v-if="list" >
                <div class="admin-aside_list-chat" @click="closeList" >
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/Menu.png" alt="">
                    <p class="admin-aside_chat-text" > Close </p>
                </div>
                <div class="admin-aside_list-chat">
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/home.png" alt="">
                    <p class="admin-aside_chat-text" > Home </p>
                </div>
                <div class="admin-aside_list-chat">
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/users.png" alt="">
                    <p class="admin-aside_chat-text" > users </p>
                </div>
                <div class="admin-aside_list-chat">
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/notii.png" alt="">
                    <p class="admin-aside_chat-text" > Notifications </p>
                </div>
                <div class="admin-aside_list-chat last">
                    <img class="admin-aside_chat-img" src="../../assets/System/Admin/info.png" alt="">
                    <p class="admin-aside_chat-text" > Info </p>
                </div>
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
    }
}
</script>