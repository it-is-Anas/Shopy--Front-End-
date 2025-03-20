<template>
    <div class="auth-form_input auth-form_input-double" >
        <div class="auth-form_input">
            <label class="auth-form-input-label" > {{ label1 }} </label>
            <input :class="{'g-inp-err':inpErr[0]}" class="auth-form-input_inp" v-model="value1" :placeholder="placeholder1"  :type='type1'>
        </div>
        <div class="auth-form_input">
            <label class="auth-form-input-label" > {{ label2 }} </label>
            <input :class="{'g-inp-err':inpErr[1]}" class="auth-form-input_inp" v-model="value2" :placeholder="placeholder2"  :type='type2'>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    props:{
        label1:{
            default: 'label 1',
        },
        label2:{
            default: 'label 2',
        },
        placeholder1:{
            default: ''
        },
        placeholder2:{
            default: ''
        },
        type1:{
            default: 'text',
        },
        type2:{
            default: 'text',
        },
        inpErr:{
            default: [0,0],
        }
    },
    setup(){
        const value1 = ref('');
        const value2 = ref('');
        function getValue(){
            return [value1.value,value2.value];
        }
        return{
            value1,
            value2,
            getValue,
        };
    },
}
</script>