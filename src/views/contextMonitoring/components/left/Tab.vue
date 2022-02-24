<template>
  <div class="box">
    <div class="content">
      <el-image class="logo" :src="jtIcon"></el-image>
      <div class="text">浙江省-嘉兴市-南湖区</div>
      <el-image class="tab" :src="tabIcon"></el-image>
      <div class="txt">切换</div>
    </div>
  </div>
</template>

<script>
import jtIcon from "@/assets/icon/jt.png";
import tabIcon from "@/assets/icon/tab.png";
export default {
  data() {
    return {
      jtIcon,
      tabIcon,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 10rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
   background-color: #002939;
    box-shadow: 1px 1px 30px #2545d4 inset;
  .content {
    width: 90%;
    height: 50%;
    border: 0.1rem solid #01bcf5;
   
    position: relative;
    .logo {
      position: absolute;
      width: 5rem;
      top: 4%;
      left: 0.5%;
    }
    .text {
      font-size: 1.8rem;
      padding-left: 18%;
      height: 5.2rem;
      line-height: 5.2rem;
      // background-color: red;
    }
    .tab {
      position: absolute;
      width: 3rem;
      height: 100%;
      top: 0%;
      right: 10%;
    }
    .txt {
      position: absolute;
      height: 5.2rem;
      text-align: center;
      line-height: 5.2rem;
      right: 2%;
      top: 0;
      width: 8%;
      font-size: 1.6rem;
    }
  }
}
</style>