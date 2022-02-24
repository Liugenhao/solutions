<template>
  <panel-header-bg title="人员分析">
    <div class="box">
      <div class="top" style="height: 20rem">
        <div class="staff-anlyse flex3">
          <div class="chart-box" ref="anlyseChart"></div>
          <div class="chart-legend">
            <el-carousel indicator-position="none"  direction="vertical" arrow="never" height="17.5rem">
              <el-carousel-item>
                <el-row>
                  <el-col 
                    :span="12"
                    v-for="(item,i) in initData"
                    :key="i">
                    <div v-if="i<11" class="item">
                      <span class="cube" :style="{backgroundColor:colors[i]}"></span>
                      <span class="name">{{item.name}}</span>
                      <span class="value">{{item.value}}</span>
                      <span>人</span>
                    </div>
                  </el-col>
                </el-row>
              </el-carousel-item>
              <el-carousel-item>
                <el-row>
                  <el-col 
                    :span="12"
                    v-for="(item,i) in initData"
                    :key="i">
                    <div v-if="i>10 && i<21" class="item">
                      <span class="cube" :style="{backgroundColor:colors[i]}"></span>
                      <span class="name">{{item.name}}</span>
                      <span class="value">{{item.value}}</span>
                      <span>人</span>
                    </div>
                  </el-col>
                </el-row>
              </el-carousel-item>
              <el-carousel-item>
                <el-row>
                  <el-col 
                    :span="12"
                    v-for="(item,i) in initData"
                    :key="i">
                    <div v-if="i>20" class="item">
                      <span class="cube" :style="{backgroundColor:colors[i]}"></span>
                      <span class="name">{{item.name}}</span>
                      <span class="value">{{item.value}}</span>
                      <span>人</span>
                    </div>
                  </el-col>
                </el-row>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="item" v-for="(item, i) in siteData" :key="i">
          <el-progress type="circle" :percentage="item.value"></el-progress>
          <div class="num">{{ item.num +'人'}}</div>
          <div class="address">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </panel-header-bg>
</template>
<script>
import { getLaborData } from '@/api/staffSupervise/index'
export default {
  name: "LaborCom",
  data() {
    return {
      initData: [],
      colors: [],
       datalen:null,
      siteData: [
        { name: "悦都会小区二期", value: 80.8, num: 1000 },
        { name: "四季湘洲小区一标", value: 86.8, num: 1000 },
        { name: "朗诗绿洲璟院三期", value: 78.8, num: 1000 },
        { name: "研发中心楼（年产1000吨塑料型材建设项目）", value: 78.8, num: 1000 },
        { name: "四季华庭", value: 78.8, num: 1000 },
        { name: "濮园栖凤苑I标段", value: 78.8, num: 1000 },
        { name: "濮园栖凤苑Ⅱ标段", value: 78.8, num: 1000 },
        { name: "悦都会小区一期", value: 78.8, num: 1000 },
      ],
    };
  },
  mounted() {
    this.$nextTick(function(){
      this.getData();
    })
  },
  methods: {
    getData () {
      getLaborData().then( res =>{
        if(res.code == 200) {
          this.datalen = res.data.length;
          this.initData = res.data;
          //根据数据对象长度随机生成颜色
          for(let i = 0;i<this.datalen;i++){
            let str = "#";
            for(let j = 0;j<6;j++){
              str+=Math.floor(Math.random()*16).toString(16)
            }
            //console.log(str)
            this.colors.push(str)
          }
          this.initChart(this.initData);
        }
      })
    },
    initChart(data) {
      // 基于准备好的dom，初始化echarts实例
      //const data = this.initData;
      let doc = this.$refs.anlyseChart;
      let chart = this.$echarts.init(doc);
      // 绘制图表
      chart.setOption({
        color: this.colors,
        tooltip: {
          trigger: "item",
          position: ["50%", "60%"],
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "人员分析",
            type: "pie",
            radius: ["50%", "80%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: "#fff",
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box {

  .top {
    .staff-anlyse {
      position: relative;
      flex-direction: row;
      width: 100%;
      height: calc(100% - 3rem);
      .chart-box {
        height: 100%;
        flex: 0 0 30%;
      }
      .chart-legend {
        height: 18rem;
        flex: 0 0 70%;
        .item {
          line-height: 3rem;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            &:nth-of-type(4){
              margin-right: 1rem;
            }
          }
          .name{
            text-align: left;
            color: #fff;
            font-size: 1.2rem;
            width: 7.6rem;
            text-align: center;
          }
          .value {
            color: #00ebff;
            flex:0 0 20%;
            text-align: center;
          }
        }
        .cube {
          display: inline-block;
          border-radius: 2px;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  .bottom {
    display: flex;
    height: 30rem;
    overflow: hidden;
    // overflow-y: scroll;
    flex-wrap: wrap;
    align-items: center;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 1.4rem;
      .address {
        width: 6rem;
        text-align: center;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 行数
        -webkit-box-orient: vertical;
      }
      .num {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 1.4rem;
        transform: translate(-50%, -50%);
      }
    }

    /deep/ .el-progress__text {
      color: #fff;
    }
    /deep/ .el-progress {
      margin: 0.6rem;
    }
    /deep/ .el-progress-circle {
      width: 10rem !important;
      height: 10rem !important;
    }
  }
}
</style>