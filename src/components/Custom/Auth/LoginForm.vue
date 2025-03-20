<template>
    <form class="auth-page_form" >
        <img  class="auth-page-form_img" src="../../../assets/System/Login.png" alt="">
        <div class="auth-page-form_middle-bar" ></div>
        <div class="auth-page-form_inputs" >
            <h3 class="auth-form_headline" >LOG IN</h3>
            <AuthFormInput :label="'Your email :'"  :inpErr="emailErr"  ref="emailFiled" :placeholder="'jhon@example.com'" :type="'email'" />
            <AuthFormInput :label="'Your password :'" :inpErr="passwordErr" ref="passwordFiled" :placeholder="'**********'" :type="'password'" />
            <auth-form-btn  @click="logIn" :label="'Log in'" />
            <auth-form-link :to="'/sign-up'" :label="'Create a new email !'" />
        </div>
    </form>
</template>
<script>
    import { ref } from 'vue';
    import { mapGetters, mapMutations } from 'vuex';
    import AuthFormInput from '../Inputs/AuthFormInput.vue';
    import AuthFormBtn from '../Buttons/AuthFormBtn.vue';
    import AuthFormLink from '../Links/AuthFormLink.vue';
    import { inject } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { computed , watch, reactive   } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required , email ,helpers} from '@vuelidate/validators';
    export default {
        components:{ 
            AuthFormInput,
            AuthFormBtn,
            AuthFormLink,
        },
        setup(){


            const router = useRouter();
            const store = useStore();

            
            const openLoader = inject('openLoader');
            const msg = inject('msg');
            const closeLoader = inject('closeLoader');


            const loadPage = computed(()=>store.getters['authStore/getsendingRequest']);
            watch(loadPage,(value)=>{
                if(value){
                    openLoader();
                }else{
                    closeLoader();
                }
            });

            const errValidation = computed(()=>store.getters['authStore/getErrValidation']);
            watch(errValidation,(value)=>{
                if(value)
                    msg(value);
            });

            const toHomePage = computed(()=>store.getters['authStore/getLogged']);
            watch(toHomePage,(value)=>{
                console.log('logged ', value);
                if(value) {
                    router.push('/home');
                }
            });

            const emailFiled  = ref(null);
            const passwordFiled  = ref(null);
            const emaile = ref('');
            const password = ref('');

            function collectData(){
                emaile.value = emailFiled.value.getValue();
                password.value = passwordFiled.value.getValue();
            }
            function printValues(){
                console.log('###############');
                console.log(emaile);
                console.log(password);
                console.log('###############');
            }
            const emailErr = ref(0);
            const passwordErr = ref(0);

            const emailValue = computed(()=>{
                if(emailFiled.value){
                    return emailFiled.value.getValue();
                }else{
                    return '';
                }
            });
            const passwordValue = computed(()=>{
                if(emailFiled.value){
                    return passwordFiled.value.getValue();
                }else{
                    return '';
                }
            });

            // const state = reactive({
            //     email: emailValue.value,
            //     password: passwordValue.value,
            // });

            const state = reactive({
                get email() {
                    return emailValue.value;
                },
                get password() {
                    return passwordValue.value;
                },
            });
            
            const isNumeric = helpers.withMessage('Field must contain only numbers.', value =>
                /^[0-9]+$/.test(value)
            );
            const hasValidLength = helpers.withMessage('Field must be exactly 8 digits long (less 20 number).', value =>
                value?.length >= 8 && value?.length <= 20
            );
            const rules = computed(()=>{
                return{
                    email: {required ,email  }  ,
                    password: {
                        required,
                        isNumeric,       // Custom numeric validator
                        hasValidLength, 
                    },
                }; 
            });

            const $v = useVuelidate(rules,state);

            async function logIn(){
                $v.value.$validate();
                if($v.value.$error){
                    if($v.value.email.$error){
                        msg($v.value.email.$errors[0].$message);
                        emailErr.value=true;
                    }
                    else if($v.value.password.$error){
                        emailErr.value=!true;
                        passwordErr.value=true;
                        msg($v.value.password.$errors[0].$message);
                    }
                }else{
                    passwordErr.value=!true;
                    console.log(state);
                    store.dispatch('authStore/logIn');
                    collectData();
                    store.commit('authStore/updateLocalDateLogIn',{email:emaile.value,password: password.value});
                    store.dispatch('authStore/logIn');
                }

                    
            }
            
            return{
                emailFiled,
                passwordFiled,
                logIn,
                emailErr,
                passwordErr,
            };
        },
    }
</script>