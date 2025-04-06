<template>
    <transition name="fade" >
        <div @click="close" class="g-bk profile-bk" v-if="appear" ></div>
    </transition>
    <transition name="fade" >    
        <div class="profile-pop-up" v-if="appear" >  
            <span class="g-close-btn-for-mobile" @click="close"  >+</span>
            <h2 class="profile-pop-up_head-line">Head Line :</h2>
            <div class="profile-pop-up_input-box">
                <label for="" class="profile-pop-up-input-box_label">First Name :</label>
                <input placeholder="first name" type="text" class="profile-pop-up-input-box_inp" >
            </div>
            <div class="profile-pop-up_input-box">
                <label for="" class="profile-pop-up-input-box_label">Last Name :</label>
                <input placeholder="Last name" type="text" class="profile-pop-up-input-box_inp" >
            </div>
            <btn :label="'save'" />
        </div>
    </transition>
</template>
<script>
import btn from '@/components/Custom/Buttons/AuthFormBtn.vue';
import { ref } from 'vue';
export default {
    components:{
        btn,
    },setup(){
        const appear = ref(false);

        function open(){
            appear.value = true;
        }
        function close(){
            appear.value = !true;
        }

        return{
            appear,
            open,
            close
        };
    }
}
</script>