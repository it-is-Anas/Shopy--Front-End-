<template>
    <div class="admin-home" >
        <Links />
        <!-- <div class="admin-charts-section">
            <Chart class="col" :chartTitle="'Users registertions :'" :ruler="rulerOne" :charts="chartsOne" />
            <Chart class="col" :chartTitle="'Sells :'" :ruler="rulerOne" :charts="chartsOne" />
        </div> -->
        <h4 class="admin-section-title" >Products :</h4>
        <div class="admin-users-display admin-product-display">
            <productCard 
                v-for="product in products" 
                :key="product.id"
                :id="product.id"
                :brand="product.brand"
                :name="product.name"
                :desc="product.desc"
                :imgUrl="product.img_url"
                :datee="product.createdAt"
            />
        </div>
    </div>
</template>
<script>
import Chart from '@/components/Admin/Chart/Chart.vue';
import productCard from '@/components/Admin/ProductCard/ProductCard.vue';
import Links from '@/components/Admin/Links/AdminHomeLinks.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components:{
        Chart,
        productCard,
        Links
    },data(){
        return {

        };
    },
    methods:{
        ...mapActions({
            'pullProductsAction': 'adminHomeStore/pullProducts'
        })
    },mounted(){
        this.pullProductsAction();
    },computed: {
        ...mapGetters({
            'products': 'adminHomeStore/getProducts'
        })
    }
}
</script>
