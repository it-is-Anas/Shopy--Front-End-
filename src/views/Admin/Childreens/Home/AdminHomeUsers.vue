<template> 
    <div class="admin-home" >
        <Links />
        <div class="admin-charts-section" v-if="Users.length" >
            <Chart class="col" :chartTitle="'Users registertions :'" :ruler="rulerOne" :charts="chartsOne" />
            <Chart class="col" :chartTitle="'Sells :'" :ruler="rulerOne" :charts="chartsOne" />
        </div>
        <div class="admin-users-display" v-if="Users.length" >
            <h4 class="admin-section-title" >Users :</h4>
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
        <div class="flex-center"  v-else >
            <img width="300em" src="../../../../assets/emptygreen.png" alt="" class="">
            <p class="" >Nothing to appear</p>
        </div>
    </div>
</template>
<script>
import Chart from '@/components/Admin/Chart/Chart.vue';
import UserCard from '@/components/Admin/UsersCard/UserCard.vue';
import Links from '@/components/Admin/Links/AdminHomeLinks.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        Chart,
        UserCard,
        Links,
    },data(){
        return {
                
        };
    },computed:{
        ...mapGetters({
            'Users': 'adminHomeStore/getUsers',
        })
    },methods:{
        ...mapActions({
            pullUsersFromServer: 'adminHomeStore/pullUsers',
        })
    },mounted(){
        this.pullUsersFromServer();
    },watch:{

    }
}
</script>
