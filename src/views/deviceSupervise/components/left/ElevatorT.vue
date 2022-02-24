<template>
  <div class="box">
    <panel-header title="升降机监管概况">
      <div class="content">
        <div class="left">
          <div class="alarm-analyse">
            <div class="analyse-chart" ref="main"></div>
          </div>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item, i) in indicator" :key="i">
              <div class="num">{{ item.value }}</div>
              <div class="tit">
                <img :src="quanIcon" alt="" />
                <span>{{ item.text }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </panel-header>
  </div>
</template>

<script>
import quanIcon from "@/assets/icon/quan.png";
export default {
  data() {
    return {
      quanIcon,
      indicator: [
        { text: "综合指数", value: 0 },
        { text: "安全指数", value: 60 },
        { text: "使用指数", value: 31 },
        { text: "管理指数", value: 60 },
        { text: "稳定指数", value: 31 },
      ],
    };
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
        color: ["#6799D8", "#FFE434", "#56A3F1", "#FF917C"],
        title: {
          // text: "Customized Radar Chart",
        },
        legend: {},
        radar: [
          {
            indicator: [
              { text: "安全指数" },
              { text: "使用指数" },
              { text: "管理指数" },
              { text: "稳定指数" },
            ],
            // center: ["25%", "50%"],
            radius: 60,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            axisName: {
              // formatter: '【{value}】',
              color: "#428BD4",
            },
            splitArea: {
              areaStyle: {
                color: ["#002435", "#002334", "#083242", "#243c4c"],
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10,
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            data: [
              {
                value: [60, 31, 60, 31],
                // name: "Data A",
                areaStyle: {
                  color: "rgba(2, 180, 234, 0.3)",
                },
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
  .content {
    display: flex;
    .left {
      width: 50%;
      .alarm-analyse {
        height: 100%;
        .analyse-chart {
          height: 26rem;
          width: 100%;
        }
      }
    }
    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
       
        li {
          width: 50%;
          padding: 2rem 0;
          text-align: center;
          .num {
            width: 100%;
            font-size: 2rem;
            padding-left: 1rem;
            color: #0392a6;
          }
          .tit {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            // border: 1px solid red;
            img {
              width: 2rem;
              margin-right: 1rem;
            }
          }
        }
        :first-child {
          width: 100%;
        }
      }
    }
  }
}
</style>