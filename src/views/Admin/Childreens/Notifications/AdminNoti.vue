<template>
    <div class="admin-noti" >
        <div class="col admin-noti_col-one">
            <h3 class="admin-noti-head-line">Previous Notifications :</h3>
            <div class="admin-noti-prev-noti-box" >
                <NotificationCard 
                    v-for="not in nots" 
                    :key="not.id"
                    :id="not.id"
                    :name="not.name"
                    :content="not.content"
                    :datee="not.createdAt"
                    :imgUrl="not.img_url"
                    
                />
            </div>
        </div>
        <div class="col admin-noti_col-two">
            <h3 class="admin-noti-head-line">Create New Notification :</h3>
            <textarea class="admin-noti-input-box" v-model="content"  placeholder="Hello Ich bin Anas" ></textarea>
            <div class="admin-noti-btn-box">
                <p class="admin-fliter-box-element" @click="clearTextArea" >Clear</p>
                <p class="admin-fliter-box-element active" @click="createNewNot(content)" >Send</p>
            </div>
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import NotificationCard from '@/components/Admin/NotificationCard/NotificationCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        NotificationCard,
    },
    computed: {  
        ...mapGetters({
            'nots': 'adminNotsStore/getNots', 
            'loading': 'adminNotsStore/getLoading',
            'getMsg': 'adminNotsStore/getMsg',
        })
    },watch: {
        nots(newNots,oldNots){
            if(newNots.length > oldNots.length){
                this.clearTextArea();
            }
        },loading(v){
            if(v){
                this.openLoaderPage();
            }else{
                this.closeLoaderPage();
            }
        },getMsg(v){
            this.setMsg(v);
        }
    },methods: {
        ...mapActions({
            'pullNotsAction': 'adminNotsStore/pullNotification',
            'createNotAction': 'adminNotsStore/createNotification',
        }),createNewNot(content){
            if(content.length){
                this.createNotAction(content);
                console.log('notification can\'t be empty');
            }
        },clearTextArea(){
            this.content = '';
        },openLoaderPage(){
            this.$refs.appLoader.openLoader();
        },
        closeLoaderPage(){
            this.$refs.appLoader.closeLoader();
        },setMsg(msg){
            this.$refs.appMsg.setMsg(msg);
        }
    },mounted(){
        this.pullNotsAction();
    },data(){
        return{
            content: '',
        };
    }
}
</script>
