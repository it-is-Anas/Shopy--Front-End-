<template>
    <div class="g-notification" >
        <p  class="g-notification_content"  :class="{'seen': seen}" >{{ content }}</p>
        <i v-if="!seen"  class="g-notification_eye-icon fa fa-eye-slash"></i>
        <i v-else class="g-notification_eye-icon fa fa-eye"></i>
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type: Number,
            default: null,
        },seen:{
            type: Boolean,
            default: false,
        },content:{
            type: String,
            default: '',
        }
    }
}
</script>