<template>
    <div>
        <Chart type="treemap" height="350" :options="chartOptions" :series="this.lineChartData" />
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "TreeChart",
    props: {
        treeChartData: Array,
    },
    components: {
        Chart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                legend: {
                    show: false,
                },
                chart: {
                    height: 350,
                    type: "treemap",
                },
                colors: ['#351f98']

            },
        };
    },
    computed: {
        lineChartData() {
            return [{ data: this.$props.treeChartData }];

        },
    },
};
</script>
