<template>
    <div class="auth-form_input" >
        <label class="auth-form-input-label" > {{ label }} </label>
            <input class="auth-form-input_inp" :class="{'g-inp-err':inpErr}" v-model="value" :placeholder="placeholder" :type='type'>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    props:{
        label:{
            default: 'default value'
        },placeholder:{
            default: 'default placehoder' 
        },type:{
            default: 'text',
        },inpErr: {
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