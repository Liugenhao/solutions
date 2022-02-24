<template>
    <div class="layout">
      <header-compoent></header-compoent>
      <router-view/>
    </div>
</template>
<script>
import HeaderCompoent from  "./components/header/index.vue"
export default {
  name:"layoutIndex",
  components:{
    HeaderCompoent
  }
}
</script>
<style lang="less" scoped>
  .layout {
    width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>