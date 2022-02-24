<template>
  <panel-header-bg title="特殊设备统计" height="26" >
    <div class="facility-statistics flex3">
      <div class="content">
        <div class="content-left">
          <div class="count-info">
            <el-image :src="stIcon"></el-image>
            <p style="color:#00BEF2;">2190</p>
            <p>设备总数（个）</p>
          </div>
        </div>
        <div class="content-right">
          <div class="details-info">
            <div 
              class="info-item"
              v-for="(item,i) in defaultData"
              :key="i">
              <div class="item">
                <el-image :src="icons[i]"></el-image>
              </div>
              <div class="item">
                <span class="green-cube cube"></span>
                正常
                <span class="green-text">12</span>
                台
              </div>
              <div class="item">
                <span class="gray-cube cube"></span>
                停止
                <span class="gray-text">12</span>
                台
              </div>
              <div class="item">
                <span class="red-cube cube"></span>
                异常
                <span class="red-text">12</span>
                台
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </panel-header-bg>
</template>
<script>
import stIcon from "@/assets/img/st_sb.png"
import aqmIcon from "@/assets/img/aqm.png"
import sjjIcon from "@/assets/img/sjj.png"
import tdIcon from "@/assets/img/td.png"

export default {
  name:"facilityStatistics",
  data () {
    return {
      stIcon,
      icons:[aqmIcon,sjjIcon,tdIcon],
      defaultData:[
        {name:"安全帽",normalVal:12,stopVal:3,errorVal:1},
        {name:"升降机",normalVal:12,stopVal:3,errorVal:1},
        {name:"塔吊",normalVal:12,stopVal:3,errorVal:1},
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .facility-statistics {
    height: calc(100% - 3rem);
    width: 100%;
    .content {
      display: flex;
      width: 100%;
      height: 100%;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      &-left{
        flex:0 0 30%;
        .count-info {
          text-align: center;
          /deep/ img {
            width: 6rem;
            height: auto;
          }
          p{
            margin-top:8px;
            font-size: 1.6rem;
            font-weight: 600;
          }
        }
      }
      &-right {
        flex:0 0 70%;
        .details-info {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
        .info-item {
          display: flex;
          flex-flow: row;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          .item {
            margin-bottom: 1rem;
            font-size: 1.3rem;
            /deep/ img {
              width: 4rem;
              height: auto;
            }
            .cube {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 3px;
              display: inline-block;
            }
            .green-text {
              color: #00FF42;
            }
            .green-cube {
              background-color: #00FF42;
            }
            .gray-cube {
              background-color: #9B9792;
            }
            .gray-text {
              color: #9B9792;
            }
            .red-cube {
              background-color: #FF0000;
            }
            .red-text {
              color: #FF0000;
            }
          }
        }
      }
    }
  }
</style>