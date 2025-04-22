<template>
    <div class="admin-user-card" @contextmenu.prevent="contextMenuHandler" >
        <!-- <input class="admin-user-card-check-box" type="checkbox"> -->
        <img class="admin-user-card-profile-pic"  :src="imgUrl" alt="">
        <div class="admin-user-card-user-info">
            <p class="admin-user-card-name" >{{ username }}</p>
            <p class="admin-user-card-rank" >rank: {{ nameOfRank  }}</p>
            <p class="admin-user-card-block" >blocked: {{ blocked }}</p>
        </div>
        <p class="admin-user-card-join-date" > {{ +joinDate.getDay() + 1 }} - {{ +joinDate.getMonth()+1 }} - {{ joinDate.getFullYear() }} | {{ joinDate.getHours() }} : {{ joinDate.getMinutes() }} {{  joinDate.getHours() >= 12 ? 'PM':'AM' }}</p>
        <img @click="contextMenuHandler" v-if="menuIcon"  class="admin-user-card-menu-icon"  src="../../../assets/System/Admin/cmenu.png" alt="">
        
        <div class="admin-user-card-btn-box" v-if="blockingType" >
            <p class="admin-fliter-box-element" :class="{'active':!blocked}" @click="unBlockUser(this.id)" >Unblock</p>
            <p class="admin-fliter-box-element" :class="{'active':blocked}"  @click="blockUser(this.id)"   >Block</p>
        </div>

        <div class="admin-user-card-btn-box" v-if="adminType" >
            <p class="admin-fliter-box-element" @click="unPointAsAdmin(this.id)"  :class="{'active': this.rank}" >point as user</p>
            <p class="admin-fliter-box-element " @click="pointAsAdmin(this.id)" :class="{'active': !this.rank}" >point as admin</p>
        </div>



        <transition name="fade" >
            <div v-if="adminUserContextMenuDISPLAYER" class="admin-user-card-context-menu">
                <p class="admin-user-card-context-menu_element" v-if="!blocked" @click="blockUser(this.id)" >Block {{ username.split(' ')[0] }}</p>
                <p class="admin-user-card-context-menu_element" v-else  @click="unBlockUser(this.id)" >un Block {{ username.split(' ')[0] }}</p>
                <!-- <p class="admin-user-card-context-menu_element"  >Delete {{ username.split(' ')[0] }}</p> -->
            </div>    
        </transition>
        <div v-if="gBk" @click="gBkClickHandler" class="g-bk"></div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

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
        },...mapActions({
            'blockUserAction': 'adminHomeStore/blockUser',
            'unBlockUserAction': 'adminHomeStore/unBlockUser',
            'pointAsAdminAction': 'adminHomeStore/pointAsAdmin',
            'unPointAsAdminAction': 'adminHomeStore/unPointAsAdmin',
        }),blockUser(id){
            this.blockUserAction(id);
            this.gBkClickHandler();
        },unBlockUser(id){
            this.unBlockUserAction(id);
            this.gBkClickHandler();
        },pointAsAdmin(id){
            if(!this.rank){
                this.pointAsAdminAction(id);
                this.gBkClickHandler();
            }
        },unPointAsAdmin(id){
            if(this.rank){
                this.unPointAsAdminAction(id);
                this.gBkClickHandler();
            }
        },
    },computed:{
        gBk(){
            return this.adminUserContextMenuDISPLAYER;
        },
        adminUserContextMenuDISPLAYER(){
            return this.adminUserPageContextMenu && this.adminUserContextMenuAppear;
        },menuIcon(){
            const res = !this.adminType &&  !this.blockingType ;
            return res;
        }, backIp(){ return this.$store.getters['authStore/ip'].raw;},
        imgUrl(){
            if(!this.img){
                return require('@/assets/User/Profile.png');
            }else{
                return this.backIp + this.img;
            }
        },nameOfRank(){
            return this.rank?'Admin':'User';
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
        },username:{
            default: 'User Name',
            type: String,
        },rank:{
            default: 0,
            type: Boolean,
        },blocked:{
            default: false,
            type: Boolean,
        },joinDate:{
            default: new Date() ,
            type: Date,
        },img:{
            default: null,
            type: String,
        },id: {
            default: null,
            type: Number
        }
    }
}
</script>