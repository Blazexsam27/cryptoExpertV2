<template>
    <div class="scatter-chart">
        <Chart type="scatter" height="350" :options="chartOptions" :series="this.scatterDataValues"></Chart>

    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "ScatterChart",
    props: {
        data: Array
    },
    components: {
        Chart: VueApexCharts
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'scatter',
                    zoom: {
                        enabled: true,
                        type: 'xy'
                    }
                },
                xaxis: {
                    tickAmount: 10,
                    labels: {
                        formatter: function (val) {
                            return parseFloat(val).toFixed(1)
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (value) {
                            if (value >= 1000000) {
                                return (value / 1000000).toFixed(2) + 'M';
                            } else {
                                return (value / 1000).toFixed(2) + 'K';
                            }
                        }
                    }
                }
            },

        }
    },

    computed: {
        scatterDataValues() {
            return [{ name: "Price vs MarketCap", data: this.$props.data }];
        }
    }
}
</script>
<style lang="scss">
.scatter-chart {
    width: 95%;
    box-shadow: 0 0 7px -3px $c4;
    border-radius: 10px;
    padding: 1rem;
}
</style>