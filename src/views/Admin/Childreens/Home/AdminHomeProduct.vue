<template>
    <div class="admin-home" >
        <Links />
        <div class="admin-charts-section">
            <Chart class="col" :chartTitle="'Users registertions :'" :ruler="rulerOne" :charts="chartsOne" />
            <Chart class="col" :chartTitle="'Sells :'" :ruler="rulerOne" :charts="chartsOne" />
        </div>
        <h4 class="admin-section-title" >Products :</h4>
        <div class="admin-users-display admin-product-display">
            <productCard v-for="one in 100" :key="one" />
        </div>
    </div>
</template>
<script>
import Chart from '@/components/Admin/Chart/Chart.vue';
import productCard from '@/components/Admin/ProductCard/ProductCard.vue';
import Links from '@/components/Admin/Links/AdminHomeLinks.vue';

export default {
    components:{
        Chart,
        productCard,
        Links
    },data(){
        return {
            rulerOne:{
                low: 10,
                hight: 40,
                step: 5
            },
            chartsOne:[
                {
                    id: 0 ,
                    label: 'Sn',
                    prec: 20
                },
                {
                    id: 0 ,
                    label: 'Mn',
                    prec: 90
                },
                {
                    id: 0 ,
                    label: 'Th',
                    prec: 90
                },
                {
                    id: 0 ,
                    label: 'Fr',
                    prec: 10
                },
                {
                    id: 0 ,
                    label: 'St',
                    prec: 50
                },
                {
                    id: 0 ,
                    label: 'Tus',
                    prec: 80
                },
                {
                    id: 0 ,
                    label: 'wed',
                    prec: 40
                },
            ]
        };
    }
}
</script>
