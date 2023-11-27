<template>
    <div class="line-chart">
        <Chart type="line" height="350" :options="chartOptions" :series="series"></Chart>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: "LineChart",
    components: {
        Chart: VueApexCharts
    },
    data() {
        return {
            series: [{
                name: "Bitcoin",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Bitcoin Price Chart',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            }
        }
    }
}
</script>
<style lang="scss">
.line-chart {
    width: 95%;
    box-shadow: 0 0 7px -3px $c4;
    border-radius: 10px;
    padding: 1rem;
}
</style>