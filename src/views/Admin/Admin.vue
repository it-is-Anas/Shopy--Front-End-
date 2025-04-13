<template>
    <div class="page  admin-page" >
        <admin-header  />
        <admin-aside  />
        <div class="admin-work_space">
            
        </div>
    </div>
</template>
<script>
    import AdminHeader from '@/components/Admin/AdminHeader.vue';
    import AdminAside from '@/components/Admin/AdminAside.vue';
    export default {
        components:{
            AdminHeader,
            AdminAside,
        }
    }
</script>
 