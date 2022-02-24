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
    this.$nextTick(function () {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let doc = this.$refs.main;
      let chart = this.$echarts.init(doc);
      chart.setOption({
        title: {
          text: "工地数",
          
          // height:10,
          //   textStyle:["#fff"],
          //   fontSize:16
          textStyle: {
            color: "#fff",
            fontSize: 12,
            // height:40,
            // lineHeight: 40,
          },
        },

        color: {
          colorStops: [
            {
              offset: 0,
              color: "#0978B8", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0978B8", // 100% 处的颜色
            },
          ],
        },
        textStyle: {
          color: "#eee",
        },
        tooltip: {
          trigger: "axis",
        },
        // legend: {
        //   data: ['Email']
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          top:"15%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "10%",
            "20%",
            "30%",
            "40%",
            "50%",
            "60%",
            "70%",
            "80%",
            "90",
            "100%",
          ],
            axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        yAxis: {
          type: "value",
            axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        series: [
          {
            // name: 'Email',
            type: "line",
            stack: "Total",
            data: [28, 42, 59, 39, 41, 82, 68, 75, 48, 92],
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