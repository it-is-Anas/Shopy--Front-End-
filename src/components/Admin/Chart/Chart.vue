<template>
    <div class="admin-chart" v-if="charts.length" >
        <h4 class="admin-chart-title">{{ chartTitle }}</h4>
        <div class="admin-the-chart">
            <ChartRuler :low="ruler.low" :hight="ruler.hight" :step="ruler.step" />
            <ChartColumn v-for="one in charts" :prec="one.prec" :label="one.label" :key="one.id" />
        </div>
    </div>
</template>
<script>
    import ChartRuler from './ChartRuler.vue';
    import ChartColumn from './ChartColumn.vue';
    export default {
        components:{
            ChartRuler,    
            ChartColumn,    
        },data(){
            return {
                
            };
        },props:{
            charts:{
                type: Array,
                default: [],
            },
            ruler:{
                type: Object,
                default: {
                    low: 1,
                    height: 7,
                    step: 1,
                }
            },chartTitle:{
                default: 'Chart Title',
                type: String
            }
        }
    }
</script>