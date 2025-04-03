
<template>
    <form class="auth-page_form" >
        <div class="auth-page-form_inputs" >
            <h3 class="auth-form_headline" >SIGN UP</h3>
            <auth-form-double-input :inpErr="[filedBool[0],filedBool[1]]" ref="nameFiled" :label1="'First name :'" :label2="'Last naem :'" :placeholder1="'Jhon'" :placeholder2="'Wealth'" />
            <AuthFormInput :inpErr="filedBool[2]" ref="emailFiled" :label="'Your email :'" :placeholder="'jhon@example.com'" :type="'email'" />
            <AuthFormInput :inpErr="filedBool[3]" ref="passwordFiled" :label="'Your password :'" :placeholder="'**********'" :type="'password'" />
            <AuthFormInput :inpErr="filedBool[4]" ref="birthDayFiled" :label="'Your Birth day :'" :placeholder="''" :type="'date'" />
            <auth-form-radio :inpErr="filedBool[5]" ref="genderFiled" />
            <auth-form-btn @click="SignUp"  :label="'Sign up'" />
            <auth-form-link :to="'/log-in'" :label="'Already have an account?!'" />
        </div>
        <div class="auth-page-form_middle-bar" ></div>
        <img  class="auth-page-form_img" src="../../../assets/System/Signup.png" alt="">
    </form>
</template>
<script>
    import { ref , computed , watch } from 'vue';
    import AuthFormInput from '../Inputs/AuthFormInput.vue';
    import AuthFormDoubleInput from '../Inputs/AuthFormDoubleInput.vue';
    import AuthFormLink from '../Links/AuthFormLink.vue';
    import AuthFormRadio from '../RadioInput/AuthFormRadio.vue';
    import AuthFormBtn from '../Buttons/AuthFormBtn.vue';
    import { inject } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import useVuelidate from '@vuelidate/core';
    import { reactive } from 'vue';
    import { helpers, required , email } from '@vuelidate/validators';
    
    export default {
        components:{
            AuthFormInput,
            AuthFormBtn,
            AuthFormLink,
            AuthFormDoubleInput,
            AuthFormRadio,
        },
        setup(){
            const router = useRouter();
            const store = useStore();
            const userProfile = computed(() => store.getters['authStore/getProfile']);  
            const errValidation = computed(()=> store.getters['authStore/getErrValidation']);
            const loadPage = computed(()=> store.getters['authStore/getsendingRequest']);
            const toHomePage = computed(()=>store.getters['authStore/getLogged']);

            const openLoader = inject('openLoader');
            const msg = inject('msg');
            const closeLoader = inject('closeLoader');
            
            watch(errValidation,(value)=>{
                if(value)
                    msg(value);
            });
            watch(loadPage,(value)=>{
                if(value){
                    openLoader();
                }else{
                    closeLoader();
                    
                }
            });
            watch(toHomePage,(value)=>{
                if(value) {
                    router.push('/home');
                }
            });

            const nameFiled = ref(null);
            const emailFiled  = ref(null);
            const passwordFiled  = ref(null);
            const genderFiled  = ref(null);
            const birthDayFiled  = ref(null);

            const firstName = ref('');
            const lastName = ref('');
            const emailValue = ref('');
            const password = ref('');
            const birthDay = ref('');
            const gender = ref('');

            function collectData(){
                firstName.value = nameFiled.value.getValue()[0];
                lastName.value = nameFiled.value.getValue()[1];
                emailValue.value = emailFiled.value.getValue();
                password.value = passwordFiled.value.getValue();
                birthDay.value = birthDayFiled.value.getValue();
                gender.value = genderFiled.value.getValue();
                
            }
            
            


            function printValues(){
                console.log('###############');
                console.log(firstName.value);
                console.log(lastName.value);
                console.log(emailValue.value);
                console.log(password.value);
                console.log(birthDay.value);
                console.log(gender.value);
                console.log('###############');
            }
            
            const state = reactive({
                get firstName(){
                    return nameFiled.value.getValue()[0];
                },
                get lastName(){
                    return nameFiled.value.getValue()[1];
                },
                get email(){
                    return emailFiled.value.getValue();
                },
                get password(){
                    return passwordFiled.value.getValue();
                },
                get birthDay(){
                    return birthDayFiled.value.getValue();
                },
                get gender(){
                    return  genderFiled.value.getValue();
                },

            });
            const hasNameLength = helpers.withMessage('Field must be exactly 3 digits long (less 10 number).', value =>{
                const regex = /^[a-zA-Z]{3,9}$/;
                return regex.test(value)//(value?.length >= 3 && value?.length <= 10);
            }
            );
            const hasGoodPassword = helpers.withMessage('Password has to be nimuric and between 8 to 20 nimuric .', value =>
                value?.length >= 8 && value?.length <= 20 && /^[0-9]+$/.test(value)
            );
            const rules = computed(_=>{
                return {
                    firstName: {required,hasNameLength},
                    lastName: {required,hasNameLength},
                    email: {required,email},
                    password: {required,hasGoodPassword},
                    gender: {required},
                    birthDay: {required},
                };
            });

            const $v = useVuelidate(rules,state);
            const filedBool = ref([0,0,0,0,0,0,0]);
            function SignUp(){
                filedBool.value = [0,0,0,0,0,0,0];
                $v.value.$validate();
                if($v.value.$error){
                    console.log('Error with validation');// remove after 
                    if($v.value.firstName.$error){
                        msg($v.value.firstName.$errors[0].$message);
                        filedBool.value[0] = 1;
                    }else if($v.value.lastName.$error){
                        msg($v.value.lastName.$errors[0].$message);
                        filedBool.value[1] = 1;
                    }else if($v.value.email.$error){
                        msg($v.value.email.$errors[0].$message);
                        filedBool.value[2] = 1;
                    }else if($v.value.password.$error){
                        msg($v.value.password.$errors[0].$message);
                        filedBool.value[3] = 1;
                    }else if($v.value.birthDay.$error){
                        msg($v.value.birthDay.$errors[0].$message);
                        filedBool.value[4] = 1;
                    }else if($v.value.gender.$error){
                        msg($v.value.gender.$errors[0].$message);
                        filedBool.value[5] = 1;
                    }
                }else{
                    collectData();
                    store.commit('authStore/updateLocalDate',{
                        firstName: firstName.value,
                        lastName: lastName.value,
                        email: emailValue.value,
                        password: password.value,
                        birthDay: birthDay.value,
                        gender: gender.value,
                    });
                    store.dispatch('authStore/signUp');
                }
            }
            return{
                nameFiled,
                emailFiled,
                passwordFiled,
                genderFiled,
                birthDayFiled,
                SignUp,
                filedBool,
                printValues,
            };
        },
    }
</script>