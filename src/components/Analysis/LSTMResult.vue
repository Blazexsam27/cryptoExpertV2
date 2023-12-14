<template>
    <div class="lstm-result">
        <div class="subhead">Next 30 days predictions (usd)</div>
        <div class="prediction-line-chart">

            <Chart type="line" height="350" width="100%" :options="chartOptions" :series="lineChartData" />
        </div>
        <div class="prediction-insights">
            <div class="insight-head">Insights</div>
            <div class="high-low">
                <div><span class="label">Highest price: </span> <span class="value">$ {{ this.maxValue.toFixed(4) }}</span>
                </div>
                <div><span class="label">Lowest price: </span> <span class="value">$ {{ this.minValue.toFixed(4) }} </span>
                </div>
            </div>
            <div class="mean-deviation">
                <div> <span class="label">Average price: </span> <span class="value">$ {{ this.meanValue }} </span></div>
                <div> <span class="label">Standard deviation: </span> <span class="value">$ {{ this.standardDeviation }}
                    </span></div>
            </div>
        </div>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import { getMeanValue, getStandardDeviation } from "../../utils/analysisUtils";
export default {
    name: "LSTMResult",
    components: {
        Chart: VueApexCharts
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
                    curve: 'straight'
                },
                title: {
                    text: 'Bitcoin Trend for next 30 days',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
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
            },
            meanValue: 0,
            standardDeviation: 0,
            maxValue: 0,
            minValue: 0,
        }
    },
    props: {
        dataPoints: Array
    },
    mounted() {
        this.getInsights();
    },
    computed: {
        lineChartData() {
            return [{ name: "Price", data: this.$props.dataPoints }]
        },
    },
    methods: {
        getInsights() {
            this.meanValue = getMeanValue(this.$props.dataPoints);
            this.standardDeviation = getStandardDeviation(this.$props.dataPoints);

            this.maxValue = Math.max(...this.$props.dataPoints);
            this.minValue = Math.min(...this.$props.dataPoints);

        }
    }

}
</script>
<style lang="scss" scoped>
.lstm-result {
    width: 95%;

    .subhead {
        @include common-dflex-start;
        margin-bottom: 7px;
        color: $c4;
        font-weight: 600;
        width: 95%;
        ;

    }

    .prediction-line-chart {

        width: 99%;
        box-shadow: 0 0 7px -3px $c4;
        border-radius: 10px;
        padding: 1rem;
    }

    .prediction-insights {
        @include common-dflex-column;
        gap: 1rem;
        width: 100%;
        border-radius: 10px;
        box-shadow: $box-shadow;
        padding: 1rem;
        margin-top: 2rem;

        .label {
            color: $c2;
        }

        .value {
            color: $c4;
            font-size: 14px;
            font-weight: 600;
        }

        .insight-head {
            font-size: 1.2rem;
            color: $c2;

        }

        .high-low,
        .mean-deviation {
            @include common-dflex-center;
            gap: 2rem;
        }

        .mean-deviation {}
    }
}
</style>