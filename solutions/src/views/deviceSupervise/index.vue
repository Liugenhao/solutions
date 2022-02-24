<template>
  <div class="container">
    <el-row class="h100">
      <el-col :span="7" class="h100">
        <Elevator />
        <ElevatorT />
        <Supervise />
      </el-col>
      <el-col :span="17" class="h100" style="padding-left: 1rem">
        <Equipment />
        <Trend />
      </el-col>
    </el-row>
  </div>
</template>
<script>
// left
import Elevator from "./components/left/Elevator.vue";
import ElevatorT from "./components/left/ElevatorT.vue";
import Supervise from "./components/left/Supervise.vue";
import Trend from "./components/right/Trend.vue";
import Equipment from "./components/right/Equipment.vue";
export default {
  name: "deviceSupervise",
  components: {
    // 左侧
    Elevator,
    ElevatorT,
    Supervise,
    // 右下
    Equipment,
    Trend,
  },
};
</script>
<style lang="less" scoped>

</style>