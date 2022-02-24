<template>
  <panel-header-bg title="告警分析" height="34">
    <div class="alarm-analyse flex3">
      <div class="analyse-chart" ref="lineChart"></div>
    </div>  
  </panel-header-bg>
</template>
<script>
export default {
  name:"alarmAnalyse",
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(function(){
      this.initChart();
    })
  },
  methods:{
    initChart () {
      let doc = this.$refs.lineChart
      let chart = this.$echarts.init(doc)
      chart.setOption({
        title:{
          text:"近7天告警次数",
          top:0,
          textStyle:{
            color:"#fff",
            fontSize:11
          }
        },
        legend:{
          show:true,
          itemWidth:10,
          top:0,
          right:10,
          textStyle:{
            color:"#fff",
            fontSize:11,
            zIndex:9999
          },
          lineStyle:{
            width:0
          }
        },
        tooltip:{
          trigger:'item'
        },
        grid:{
          height:180,
          left: 25,
          top:60,
          bottom: 0,
          right: 10
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07'],
           axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:true, //网格线不显示
            lineStyle:{
              color:['#0F3A47'],
              with:1
            }
          },
            axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        series: [
          {
            name:"扬尘",
            data: [2, 3, 2, 1, 2, 4, 3],
            type: 'line',
            smooth: true,
            symbol:'none'
          },
          {
            name:"塔吊",
            data: [1, 2, 1, 3, 1, 2, 2],
            type: 'line',
            smooth: true,
            symbol:'none'
          },
          {
            name:"升降机",
            data: [1, 2, 1, 1, 2, 1, 1],
            type: 'line',
            smooth: true,
            symbol:'none'
          },
          {
            name:"塔安全帽吊",
            data: [3, 3, 2, 4, 3, 3, 3],
            type: 'line',
            smooth: true,
            symbol:'none'
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .alarm-analyse {
    height: calc(100% - 3rem);
    width: 100%;
    .analyse-chart {
      height: 100%;
      width: 100%;
    }
  }
</style>