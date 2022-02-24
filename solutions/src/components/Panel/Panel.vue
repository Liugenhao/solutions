<template>
<div class="panel" :style="{ height:height +'%'}">
  <span class="left-top-line line"></span>
  <span class="left-bottom-line line"></span>
  <span class="right-top-line line"></span>
  <span class="right-bottom-line line"></span>
  <slot />
</div>
  
</template>
<script>
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

    }
  }
}
</script>
<style lang="less" scope>
  
</style>