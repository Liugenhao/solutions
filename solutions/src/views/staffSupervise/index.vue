<template>
  <div ref="box" class="container">
    <el-row class="h100">
      <el-col :span="6" class="h100 w25">
        <!-- 在岗人员 -->
        <OnDuty />
        <!-- 劳务人员分析 -->
        <Labor />
      </el-col>
      <el-col :span="12" class="h100 w50">
        <!-- 地图 -->
        <Map />
        <!-- 月度考核  -->
        <Monthly />
      </el-col>
      <el-col :span="6" class="h100 w25">
        <!-- 考勤排行榜 -->
        <Ranking />
        <!-- 劳务纠纷 -->
        <Dispute />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import OnDuty from "./components/left/OnDuty.vue";
import Labor from "./components/left/Labor.vue";
import Map from "./components/middle/Map.vue";
import Monthly from "./components/middle/Monthly.vue";
import Ranking from "./components/right/Ranking.vue";
import Dispute from "./components/right/Dispute.vue";
export default {
  name: "staffSupervise",
  components: {
    // 左
    OnDuty,
    Labor,
    // 地图
    Map,
    Monthly,
    // 右
    Ranking,
    Dispute,
  },
};
</script>
<style lang="less" scoped>
.box{
  
}
</style>