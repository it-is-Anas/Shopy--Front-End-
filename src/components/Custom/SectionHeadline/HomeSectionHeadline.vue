<template>
    <p class="home-section-head-line " >
        {{ label }}
    </p>
</template>
<script>
export default {
    props:{
        label:{
            default: 'HeadLine'
        }
    }
}
</script>