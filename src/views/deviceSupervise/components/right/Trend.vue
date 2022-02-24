<template>
  <div class="box">
    <panel-header-bg title="近30天工地达标率">
      <div class="alarm-analyse">
        <div class="analyse-chart" ref="main"></div>
      </div>
    </panel-header-bg>
  </div>
</template>

<script>
export default {
  name: "alarmAnalyse",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let doc = this.$refs.main;
      let chart = this.$echarts.init(doc);
      chart.setOption({
        title: {
          // text: 'Stacked Area Chart'
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        // legend: {
        //   data: ['Email', 'Union Ads']
        // },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2022-01-09",
              "2022-01-10",
              "2022-01-11",
              "2022-01-12",
              "2022-01-13",
              "2022-01-14",
              "2022-01-15",
              "2022-01-16",
              "2022-01-17",
              "2022-01-18",
              "2022-01-19",
              "2022-01-20",
              "2022-01-21",
              "2022-01-22",
            ],
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: "项目1",
            type: "line",
            areaStyle: {},
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FF5C00", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FFA923", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            data: [240, 205, 211, 134, 90, 130, 210],
          },
          {
            name: "项目2",
            type: "line",
            areaStyle: {},
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0FA7FF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00638A", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            data: [
              220, 182, 191, 234, 290, 180, 110, 134, 190, 150, 280, 120, 186,
              140,
            ],
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .panel-header{
  margin-bottom: 0.6rem;
}
.alarm-analyse {
  height: 100%;
  height: 28rem;
  .analyse-chart {
    width: 100%;
    height: 100%;
  }
}
</style>