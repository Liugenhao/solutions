<template>
  <div class="box">
    <panel-header-bg title="实时环境监控" >
      <div class="content_box">
        <div class="item">
          <el-image class="imgs" :src="zjIcon"></el-image>
          <div class="num">2190</div>
          <div class="txt">超标工地（个）</div>
        </div>
        <div class="item">
          <el-image class="imgs" :src="zjIcon"></el-image>
          <div class="num">2190</div>
          <div class="txt">总工地数（个）</div>
        </div>
        <div class="item">
            <el-progress type="circle" :percentage="90" :width="135" :stroke-width="12"> </el-progress>
             <div class="text">环境超标率</div>
        </div>
        
      </div>
    </panel-header-bg>
  </div>
</template>

<script>
import zjIcon from "@/assets/icon/zj.png";
export default {
  data() {
    return {
      zjIcon,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
   margin-top: 1.5rem;
  margin-bottom: 1rem;
  .content_box {
    display: flex;
    padding: 2rem 0;
    .item {
      width: 33%;
      height: 20rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      text-align: center;
      position: relative;
      /deep/ .el-progress__text{
           color: rgb(0, 235, 255);
           font-size: 2.4rem!important;
           text-align: center;
      } 
      
      .imgs {
        width: 8rem;
        height: 8rem;
      }
      .num {
        width: 100%;
        color: rgb(0, 235, 255);
        height: 4rem;
        line-height: 4rem;
        font-size: 1.8rem;
        font-weight: bold;
      }
      .txt {
        width: 100%;
      }
      .text{
          position: absolute;
          top: 62%;
      }
    }
  }
}
</style>>

