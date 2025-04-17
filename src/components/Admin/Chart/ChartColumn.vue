<template>
    <div class="chart-column"   >
        <div class="chart-column-the-column" :style="{height: columnHeight + '%'}" :class="[{'low':prec<40},{'height':prec>55}]" ></div>
        <div class="chart-column-label"  :class="[{'low':prec<40},{'height':prec>55}]" > {{ label }} </div>
    </div>
</template>
<script>
export default {
    props:{
        label:{
            default: 'Label',
        },prec:{
            default: 54,
            type: Number
        }
    },computed:{
        columnHeight(){
            return this.prec*85/100;
        }
    },
}
</script>