<template>
    <div class="page  admin-page" >
        <admin-header  />
        <admin-aside  />
        <div class="admin-work_space">
            <router-view v-slot="slotProps" >
                <transition-group name="fade" mode="out-in" >
                    <component :is="slotProps.Component"></component>
                </transition-group>
            </router-view>
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
        },
        methods: {
            
        }
    }
</script>
    