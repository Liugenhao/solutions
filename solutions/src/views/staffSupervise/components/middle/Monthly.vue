<template>
  <div class="box" style="margin: 1rem ">
    <panel-header-bg title="月度考核">
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
        legend: {
          data: ["应列人数", "实列人数", "考勤数"],
          // 提示样式
          // icon: 'roundRect',
          textStyle: {
            color: "#fff",
          },
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "0%",
          top: "15%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // 月度时间
            data: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "项目1",

            type: "line",
            // 是否平滑
            smooth: true,
            // 是否显示亮点
            showSymbol: false,
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
            data: [
              140, 105, 111, 134, 50, 130, 110, 191, 134, 190, 180, 90, 180,
              191, 191, 104, 190, 180, 110, 91, 134, 190, 80, 110, 134, 190,
              150, 80, 110, 188,
            ],
          },
          {
            name: "项目2",
            type: "line",
            // 是否平滑
            smooth: true,
            // 是否显示亮点
            showSymbol: false,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#F6FF00", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#F6FF00", // 100% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            data: [
              120, 182, 191, 90, 130, 210, 90, 130, 90, 130, 210, 191, 234, 290,
              180, 90, 180, 191, 191, 204, 290, 180, 210, 191, 130, 210, 90,
              210, 155, 140,
            ],
          },
          {
            name: "项目3",
            type: "line",
            // 是否平滑
            smooth: true,
            // 是否显示亮点
            showSymbol: false,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00F8BF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00F8BF", // 100% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            data: [
              130, 210, 90, 130, 90, 130, 90, 130, 210, 90, 130, 90, 130, 210,
              191, 234, 291, 234, 290, 210, 155, 140, 90, 130, 90, 130, 210,
              191,  180, 191, 91,
            ],
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
.alarm-analyse {
  height: 100%;
  .analyse-chart {
    height: 21rem;
    width: 100%;
  }
}
</style>