<template>
    <div class="heatmap-container">
        <Chart type="heatmap" height="350" :options="chartOptions" :series="series"></Chart>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "HeatMap",
    components: {
        Chart: VueApexCharts

    },
    data() {
        return {
            series: [
                {
                    name: "Series 1",
                    data: [{
                        x: 'W1',
                        y: 22
                    }, {
                        x: 'W2',
                        y: 29
                    }, {
                        x: 'W3',
                        y: 13
                    }, {
                        x: 'W4',
                        y: 32
                    }]
                },
                {
                    name: "Series 2",
                    data: [{
                        x: 'W1',
                        y: 43
                    }, {
                        x: 'W2',
                        y: 43
                    }, {
                        x: 'W3',
                        y: 43
                    }, {
                        x: 'W4',
                        y: 43
                    }]
                },
                {
                    name: "Series 2",
                    data: [{
                        x: 'W1',
                        y: 43
                    }, {
                        x: 'W2',
                        y: 43
                    }, {
                        x: 'W3',
                        y: 43
                    }, {
                        x: 'W4',
                        y: 43
                    }]
                }
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#008FFB"],
                title: {
                    text: 'HeatMap Chart (Single color)'
                },
            },
        }
    }
}
</script>
<style lang="scss" scoped>
.heatmap-container {
    width: 95%;
    box-shadow: 0 0 7px -3px $c4;
    border-radius: 10px;
    padding: 1rem;
}
</style>