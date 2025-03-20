<template>
    <div class="auth-form_input auth-form_radio-btn">
        <p class="auth-form-input-label radio-btn_main-label" >Gender :</p>
        <div :class="{'g-inp-err':inpErr}" class="auth-form_options">
            <div class="auth-form-options_option">
                <input name="gender" v-model="value"  type="radio" id="male" value="male" >
                <label class="auth-form_option-label" for="male" >Male</label>
            </div>
            <div class="auth-form-options_option">
                <input  name="gender" v-model="value"  type="radio" id="female" value="female" >
                <label class="auth-form_option-label" for="female">Female</label>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    props:{
        inpErr:{
            default: false,
        }
    },
    setup(){
        const value = ref('');
        function getValue(){
            return value.value;
        }
        return{
            value,
            getValue,
        };
    },
}
</script>