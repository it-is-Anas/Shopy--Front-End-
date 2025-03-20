<template>
    <header class="g-home-page_header" >
        <header-logo />
        <!-- <search-box  /> -->
        <menu-header :active="active" />
    </header>
</template>
<script>
import HeaderLogo from '@/components/Global/HeaderLogo.vue';
import SearchBox from '../SearchBox.vue';
import MenuHeader from './InnerAppHeader/MenuHeader.vue';

export default {
    components:{
        HeaderLogo,
        SearchBox,
        MenuHeader,
    },props:{
        active:{},
    }, 
}
</script>