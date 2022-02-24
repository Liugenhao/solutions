<template>
  <div ref="box">
    <el-row class="h100">
      <el-col :span="6" class="h100 w25">
        <!-- 位置信息 -->
        <Tab />
        <!-- 工地数据 -->
        <SiteData />
        <!-- 超标工地 -->
        <Exceed />
        <!-- 实时环境监控 -->
        <Environment />
      </el-col>
      <el-col :span="12" class="h100 w50">
        <!-- 地图 -->
        <Map />
        <!-- 环境扬尘 -->
        <Dust />
      </el-col>
      <el-col :span="6" class="h100 w25">
        <!-- 告警事件 -->
        <Standard />
        <!-- 告警分析 -->
        <Sitelist />
        <!-- 消息通知 -->
        <News />
      </el-col>
    </el-row>
  </div>
</template>

<script>
//left
import SiteData from "./components/left/SiteData.vue";
import Exceed from "./components/left/Exceed.vue";
import Environment from "./components/left/Environment.vue";
import Tab from "./components/left/Tab.vue";
import Standard from "./components/right/Standard.vue";
import Sitelist from "./components/right/Sitelist.vue";
import News from "./components/right/News.vue";
import Map from "./components/middle/Map.vue";
import Dust from "./components/middle/Dust.vue";
export default {
  components: {
    // 左侧
    Tab,
    SiteData,
    Exceed,
    Environment,
    // 右侧
    Standard,
    Sitelist,
    News,
    // 中间
    Map,
    Dust,
  },
  mounted() {
 
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
</style>