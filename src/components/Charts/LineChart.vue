<template>
    <div class="line-chart">
        <Chart type="line" height="350" :options="chartOptions" :series="lineChartData"></Chart>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: "LineChart",
    components: {
        Chart: VueApexCharts
    },
    props: {
        dataPoints: Array,
        cryptoId: String,
        chartType: String
    },
    data() {
        return {
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
                    text: this.cryptoId.toUpperCase(),
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            if (value >= 1000000) {
                                return (value / 1000000).toFixed(3) + 'M';
                            } else if (value >= 10000) {
                                return (value / 1000).toFixed(3) + 'K';
                            } else {
                                return value
                            }
                        }
                    }
                }

            }
        }
    },
    computed: {
        lineChartData() {
            return [{ name: "Price", data: this.$props.dataPoints }]
        },
        getChartType() {
            return this.$props.chartType;
        }
    },
    watch: {
        cryptoId(newCryptoId) {
            this.chartOptions = {
                ...this.chartOptions,
                title: {
                    text: newCryptoId.toUpperCase(),
                    align: 'left'
                }
            };
        },
    },
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