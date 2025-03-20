<template>
    <router-link class="auth-form_btn" :to="to"  >
        {{ label }}
    </router-link>
</template>

<script>
export default {
    props:{
        label:{
            default: 'button'
        },to:{
            default: ''
        }
    },  

    setup(){

    },
}
</script>