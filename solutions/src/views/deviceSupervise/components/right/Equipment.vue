<template>
  <div class="box">
    <div class="box_left">
      <panel-header title="升降机监管概况">
        <div class="content">
          <div class="left">
            <ul>
              <li v-for="(item, i) in information" :key="i">
                <div class="tit">{{ item.tit }}</div>
                <div class="num">{{ item.num }}</div>
              </li>
            </ul>
          </div>
          <div style="float: left; width: 0.1rem; background: #394d58"></div>
          <div class="right">
            <div class="chart" ref="main"></div>
          </div>
        </div>
      </panel-header>
      <Calendar />
    </div>
    <div class="box_right">
        <regulatory-index />
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import RegulatoryIndex from "./RegulatoryIndex.vue";
export default {
  components: { Calendar, RegulatoryIndex },
  data() {
    return {
      information: [
        {
          tit: "在建项目",
          num: "2775",
        },
        {
          tit: "接入项目",
          num: "2775",
        },
        {
          tit: "异常项目",
          num: "2775",
        },
      ],
    };
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
        series: [
          {
            type: "gauge",
            progress: {
              show: true,
              width: 10,
            },
            axisLine: {
              lineStyle: {
                width: 10,
              },
            },
            color: {
              type: "linear",
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#35C480", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#3CB4F8", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FE6C6D", // 100% 处的颜色
                },
              ],
              //   global: false, // 缺省为 false
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 0,
            },
            axisLabel: {
              color: "#999",
              fontSize: 10,
            },
            detail: {
              valueAnimation: true,
              fontSize: 28,
              fontWeight: 400,
              color: "#fff",
              offsetCenter: [0, "70%"],
            },
            title: {
              show: true,
              color: "#fff",
              offsetCenter: [0, "110%"],
            },
            data: [
              {
                value: 90,
                name: "在线率",
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>

.box {
  width: 100%;
  display: flex;
  div {
    width: 100%;
    // border: 1px solid red;
  }
  /deep/ .title-text {
    flex-basis: auto;
    white-space: nowrap;
    border-left: 0.4rem solid #00c7ff;
    line-height: 1.4rem;
    display: inline-block;
    padding-left: 0.6rem;
    font-weight: 600;
    font-size: 1.6rem;
  }
  .box_left {
      width: 40%;
    .content {
      display: flex;
      .left {
        width: 50%;
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          height: 23rem;
          li {
            width: 100%;
            text-align: center;
            display: flex;
            padding: 0.5rem 5rem;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            .img_box img {
              width: 70%;
              height: 70%;
            }
            .tit {
              color: #eee;
            }
            .num {
              color: #00ebff;
              font-size: 1.8rem;
            }
          }
        }
      }
      .right {
        width: 50%;
        .chart {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .box_right{
      width: 60%;
  }
}
</style>