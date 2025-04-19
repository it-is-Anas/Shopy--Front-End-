<template>
    <div class="admin-user-card" @contextmenu.prevent="contextMenuHandler" >
        <input class="admin-user-card-check-box" type="checkbox">
        <img class="admin-user-card-profile-pic" src="../../../assets/System/Admin/prof.jpg" alt="">
        <div class="admin-user-card-user-info">
            <p class="admin-user-card-name" >user name</p>
            <p class="admin-user-card-rank" >rank: user</p>
            <p class="admin-user-card-block" >blocked: false</p>
        </div>
        <p class="admin-user-card-join-date" >11 - 2 - 2025 @ 5:00 pm</p>
        <img @click="contextMenuHandler" v-if="menuIcon"  class="admin-user-card-menu-icon"  src="../../../assets/System/Admin/cmenu.png" alt="">
        
        <div class="admin-user-card-btn-box" v-if="blockingType" >
            <p class="admin-fliter-box-element">Unblock</p>
            <p class="admin-fliter-box-element active">Delete For Ever</p>
        </div>

        <div class="admin-user-card-btn-box" v-if="adminType" >
            <p class="admin-fliter-box-element">point as user</p>
            <p class="admin-fliter-box-element active">point as admin</p>
        </div>



        <transition name="fade" >
            <div v-if="adminUserContextMenuDISPLAYER" class="admin-user-card-context-menu">
                <p class="admin-user-card-context-menu_element">Empty</p>
            </div>    
        </transition>
        <div v-if="gBk" @click="gBkClickHandler" class="g-bk"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            adminUserContextMenuAppear: false,
        };
    },methods:{
        gBkClickHandler(){
            this.adminUserContextMenuAppear = false;
        },
        contextMenuHandler(){
            this.adminUserContextMenuAppear = true;
        }
    },computed:{
        gBk(){
            return this.adminUserContextMenuDISPLAYER;
        },
        adminUserContextMenuDISPLAYER(){
            return this.adminUserPageContextMenu && this.adminUserContextMenuAppear;
        },menuIcon(){
            const res = !this.adminType &&  !this.blockingType ;
            return res;
        }
    },props:{
        adminUserPageContextMenu:{
            default: false,
            type: Boolean,
        },blockingType:{
            default: false,
            type: Boolean,
        },adminType:{
            default: false,
            type: Boolean,
        }
    }
}
</script>