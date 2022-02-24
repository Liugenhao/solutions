<template>
  <panel-header-bg title="告警事件" height="35">
    <div class="alarm-event">
      <el-row :gutter="10" type="flex" class="flex3 h100" style="width: 100%">
        <el-col :span="12">
          <div class="event-wrap">
            <h4 class="event-header">
              近30天告警事件数
              <span style="font-size: 1.6rem; color: #78f0fd">2190</span> 件
            </h4>
            <div>
              <h4 class="event-title">告警事件数（件）排行TOP3</h4>
              <ul class="event-rank">
                <li class="event-item" v-for="(item, i) in rankData" :key="i">
                  <!-- <span>{{i+1}}</span> -->
                  <div class="num_img">
                    <img
                      :src="i == 0 ? one : i == 1 ? two : i == 2 ? three : ''"
                      alt=""
                    />
                  </div>
                  <span class="nam">{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="event-wrap">
            <h4 class="event-header">
              近30天告警事件处理率
              <span style="font-size: 1.6rem; color: #78f0fd">68</span> %
            </h4>
            <div>
              <h4 class="event-title">告警事件处理率排行TOP3</h4>
              <div class="rank-chart">
                <div class="rank-chart-box" ref="barChart"></div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </panel-header-bg>
</template>

<script>
import one from "../../../../assets/icon/one.png";
import two from "../../../../assets/icon/two.png";
import three from "../../../../assets/icon/three.png";
export default {
  name: "alarmEvent",
  data() {
    return {
      one,
      two,
      three,
      rankData: [
        { name: "悦都会小区一期", value: 200 },
        { name: "朗诗绿洲璟院三期", value: 200 },
        { name: "四季湘洲小区一标", value: 200 },
      ],
      rankBarData: [97, 96, 95],
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let doc = this.$refs.barChart;
      let chart = this.$echarts.init(doc);
      chart.setOption({
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
          data: ["工地1", "工地2", "工地3"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true, //网格线不显示
            lineStyle: {
              color: ["#0F3A47"],
              with: 1,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          height: 140,
          top: 20,
          left: 30,
        },

        series: [
          {
            type: "bar",
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00FEBE" },
                { offset: 0.5, color: "#008E6F" },
                { offset: 1, color: "#00262B" },
              ]),
            },
            barWidth: 18,
            data: this.rankBarData,
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
.alarm-event {
  height: calc(100% - 3rem);
  width: 100%;
  .flex3 {
    flex-direction: row;
    align-items: flex-start;
  }
  .event-title {
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.5rem;
    background-color: #244e6f;
  }
  .event-header {
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.6rem;
  }
  .event-rank {
    padding-top: 2rem;
    li {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      font-size: 1.4rem;
      background-image: url("../../../../assets/icon/shape1.6f80eee5.png");
      padding-right: 2rem;
      background-position: 0 4px;
      background-size: 22rem 6rem;
      background-repeat: no-repeat;
      .nam {
        width: 12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .num_img {
      width: 4.35rem;
      height: 3.9rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .rank-chart {
    &-box {
      width: 100%;
      height: 20rem;
    }
  }
}
</style>