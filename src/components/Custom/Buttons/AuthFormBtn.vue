<template>
    <button class="auth-form_btn" @click.prevent="" >
        {{ label }}
    </button>
</template>

<script>
export default {
    props:{
        label:{
            default: 'button'
        },
    },  

    setup(){

    },
}
</script>