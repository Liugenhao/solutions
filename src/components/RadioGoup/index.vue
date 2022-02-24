<template>
  <div class="map-type">
    <el-radio-group 
      v-model="radioAll"
      @change="handleCheckedCitiesChange">
      <el-radio-button label="数据总览"></el-radio-button>
      <el-radio-button label="安全帽"></el-radio-button>
      <el-radio-button label="塔吊"></el-radio-button>
      <el-radio-button label="升降机"></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radioAll:'数据总览'
    }
  },
  methods:{
    handleCheckedCitiesChange(value) {
      this.$emit('handleCheckedRadio', value)
    }
  }
}
</script>
<style lang="less" scoped>
  .map-type {
    position: absolute;
    bottom: 10px;
    right: 10px;

    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background-color: #0080BE;
      border-color: #0080BE;
    }
    /deep/ .el-radio-button__inner {
      border: none;
    }
    /deep/.el-radio-button:first-child .el-radio-button__inner{
      border: none;
    }
  }
</style>