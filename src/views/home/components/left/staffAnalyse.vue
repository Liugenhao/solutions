<template>
  <panel-header-bg title="人员分析" height="25">
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
  </panel-header-bg>
</template>
<script>
//import defaultData from './staffAnalyse.js';
import { getStaffAnalyseData } from '@/api/index/index'

export default {
  name:"staffAnlyse",
  data () {
    return {
      initData:null,
      datalen:null,
      colors:[]
    }
  },
  mounted () {
    this.$nextTick(function(){
      this.getData();
    })
  },
  methods:{
    getData () {
      getStaffAnalyseData().then( res =>{
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
    initChart(data){
      // 基于准备好的dom，初始化echarts实例
      let doc = this.$refs.anlyseChart
      let chart = this.$echarts.init(doc)
      // 绘制图表
      chart.setOption({
        color:this.colors,
        tooltip: {
          trigger: 'item',
          position: ['50%', '60%']
          //show:false
        },
        legend: {
          show:false
        },
        series: [
          {
            name: '人员分析',
            type: 'pie',
            radius: ['50%', '80%'],
            center:['50%','50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#fff',
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data
          }
        ]
      });
    }
  }
}
</script>
<style lang="less" scoped>
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
</style>