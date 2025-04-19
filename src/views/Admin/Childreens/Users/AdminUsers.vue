<template>
    <div class="admin-users" >
        <Links />
        <div class="admin-users-display">
            <UserCard v-for="one in 100" :key="one "  :adminUserPageContextMenu="true" />
        </div>
    </div>
</template>
<script>
import Links from '@/components/Admin/Links/AdminUsersLinks.vue';
import UserCard from '@/components/Admin/UsersCard/UserCard.vue';
export default {
    components: {
        Links,
        UserCard
    }
}
</script>
