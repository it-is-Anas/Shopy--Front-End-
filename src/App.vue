<template>
  <router-view v-slot="slotProps" >
      <transition-group name="fade" mode="out-in" >
        <component :is="slotProps.Component"></component>
      </transition-group>
    </router-view>
</template>
<script>
export default {
  beforeMount(){
    this.$store.commit('authStore/getTokenLocal');
  }
}
</script>