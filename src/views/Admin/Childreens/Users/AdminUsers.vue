<template>
    <div class="admin-users" >
        <Links />
        <div class="admin-users-display">
            <UserCard 
                v-for="user in Users" 
                :key="user.id"
                :id="user.id"
                :username="user.first_name + ' ' +user.last_name"
                :rank="user.admin_id" 
                :blocked="user.blocked"
                :joinDate="new Date(user.createdAt)"
                :img="user.img_url"
                :adminUserPageContextMenu="true"
            />
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />

</template>
<script>
import Links from '@/components/Admin/Links/AdminUsersLinks.vue';
import UserCard from '@/components/Admin/UsersCard/UserCard.vue';
import { mapActions, mapGetters } from 'vuex';
export default { 
    components: {
        Links,
        UserCard
    },computed: {
        ...mapGetters({
            'Users': 'adminHomeStore/getUsers',
            'loading': 'adminHomeStore/getLoading',
        })
    },watch: {
        loading(v){
            if(v){
                this.openLoaderPage();
            }else{
                this.closeLoaderPage();
            }
        }
    },methods:{
        ...mapActions({
            pullUsersFromServer: 'adminHomeStore/pullUsers',
        }),
        openLoaderPage(){
            this.$refs.appLoader.openLoader();
        },
        closeLoaderPage(){
            this.$refs.appLoader.closeLoader();
        },
    },mounted(){
        this.pullUsersFromServer();
    }
}
</script>
