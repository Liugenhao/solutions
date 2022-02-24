<template>
<div class="panel" :style="{ height:height +'%'}">
  <span class="left-top-line line"></span>
  <span class="left-bottom-line line"></span>
  <span class="right-top-line line"></span>
  <span class="right-bottom-line line"></span>
  <div class="panel-header">
    <span class="panel-title-text">{{ title }}</span>
    <div class="panel-header-right">
      <el-image class="icon_img" :src="leftIcon"></el-image>
      <div class="right-line"></div>
      <el-image class="icon_img" :src="rightIcon"></el-image>
    </div>
  </div>
  <slot />
</div>
  
</template>
<script>
import titleIcon1 from "@/assets/icon/1.gif"
import titleIcon2 from "@/assets/icon/title2.566ce066.png"
export default {
  name:"panelComponent",
  props:{
    title: {
      type: String,
      default: "",
    },
    bgImg:{
      type:String,
      default: "",
    },
    height:{
      type:String,
      default: "",
    }
  },
  data () {
    return {
      leftIcon:titleIcon1,
      rightIcon:titleIcon2
    }
  }
}
</script>
<style lang="less" scope>
  
</style>