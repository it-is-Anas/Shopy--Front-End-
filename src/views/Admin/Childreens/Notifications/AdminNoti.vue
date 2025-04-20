<template>
    <div class="admin-noti" >
        <div class="col admin-noti_col-one">
            <h3 class="admin-noti-head-line">Previous Notifications :</h3>
            <div class="admin-noti-prev-noti-box" >
                <NotificationCard v-for="one in 100" :key="one" />
            </div>
        </div>
        <div class="col admin-noti_col-two">
            <h3 class="admin-noti-head-line">Create New Notification :</h3>
            <textarea class="admin-noti-input-box" placeholder="Hello Ich bin Anas" ></textarea>
            <div class="admin-noti-btn-box">
                <p class="admin-fliter-box-element">Clear</p>
                <p class="admin-fliter-box-element active">Send</p>
            </div>
        </div>
    </div>
</template>
<script>
import NotificationCard from '@/components/Admin/NotificationCard/NotificationCard.vue';

export default {
    components: {
        NotificationCard,
    }
}
</script>
