<template>
  <div class="container">
    <el-row :gutter="10" style="margin:0;padding:0" class="h100">
      <el-col :span="6" class="flex h100">
        <!-- 工地统计 -->
        <siteStatistics />
        <!-- 人员分析 -->
        <staffAnalyse />
        <!-- 当前出勤工地人数排行 -->
        <attendanceRank />
        <!-- 特殊设备统计 -->
        <facilityStatistics />
      </el-col>
      <el-col :span="12" class="flex h100">
        <!-- 地图 -->
        <!-- <mapConponent />-->
        <mapConponent2 />
        <!-- 环境扬尘 -->
        <environMent />
      </el-col>
      <el-col :span="6" class="flex h100">
        <!-- 告警事件 -->
        <alarmEvent />
        <!-- 告警分析 -->
        <alarmAnalyse />
        <!-- 视频监控 -->
        <videoMonitoring />
      </el-col>
    </el-row>
  </div>
</template>
<script>
//left
import siteStatistics from './components/left/siteStatistics.vue'
import staffAnalyse from './components/left/staffAnalyse.vue'
import attendanceRank from './components/left/attendanceRank.vue'
import facilityStatistics from './components/left/facilityStatistics.vue'
//middle
//import mapConponent from './components/middle/mapConponent.vue'
import mapConponent2 from './components/middle/mapConponent2.vue'
import environMent from './components/middle/environMent.vue'
// right
import alarmEvent from './components/right/alarmEvent.vue'
import alarmAnalyse from './components/right/alarmAnalyse.vue'
import videoMonitoring from './components/right/videoMonitoring.vue'
export default {
  name:"homePage",
  components: { 
    siteStatistics,
    staffAnalyse,
    attendanceRank,
    facilityStatistics,
    //mapConponent,
    mapConponent2,
    environMent,
    alarmEvent,
    alarmAnalyse,
    videoMonitoring,
   },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
 
</style>