<template>
    <div class="chart-ruler">
        <p class="chart-ruler-number" v-for="one in numbers" :key="one"  >{{ one }}</p>
    </div>
</template>
<script>
export default {
    props:{
        low:{
            type: Number,
            default: 1
        },hight: {
            default: 7,
            type: Number,
        },step: {
            default: 1,
            type: Number,
        },
    },computed: {
        numbers(){
            const arr = [];
            for(let i = this.hight; i >=this.low   ; i -= this.step ){
                arr.push(i);
            }
            return arr;
        }
    }
}
</script>