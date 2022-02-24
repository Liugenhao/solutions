<template>
  <div class="box">
    <panel-header-bg title="工地数据">
      <div class="data_box" v-for="(item, i) in siteData" :key="i">
        <span class="tit">{{ item.name }}</span>
        <el-progress :percentage="item.value"></el-progress>
      </div>
      <div class="data_btn">
        <div class="btns" v-for="(item, i) in siteIcon" :key="i">
          <div class="item img">
            <el-image :src="item.img"></el-image>
          </div>
          <div class="name">{{item.name}}</div>
          <div class="num">{{item.num}}</div>
          <div class="sty">{{item.type}}</div>
        </div>
    
      </div>
      
    </panel-header-bg>
  </div>
</template>

<script>
import zyIcon from "@/assets/icon/zy.png";
import qyIcon from "@/assets/icon/qy.png";
import sdIcon from "@/assets/icon/sd.png";
import fxIcon from "@/assets/icon/fx.png";
export default {
  data() {
    return {
      // icons: [zyIcon, qyIcon, sdIcon, fxIcon],
      siteData: [
        { name: "扬尘", value: 80.8 },
        { name: "PM2.5", value: 86.8 },
        { name: "PM10", value: 78.8 },
      ],
      siteIcon: [
        {
          img: zyIcon,
          name: "噪音",
          num: "30",
          type: "db",
        },
        {
          img: fxIcon,
          name: "风向",
          num: "北风(N)",
          type: "",
        },
        {
          img: zyIcon,
          name: "温度",
          num: "28.9",
          type: "℃",
        },
        {
          img: zyIcon,
          name: "风速",
          num: "30",
          type: "dB",
        },
        {
          img: sdIcon,
          name: "湿度",
          num: "67",
          type: "%",
        },
        {
          img: qyIcon,
          name: "气压",
          num: "28.9",
          type: "℃",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  // margin-top: 10px;
  margin-bottom: 1.5rem;
  .data_box {
    display: flex;
    height: 4rem;
    .tit {
      display: block;
      width: 10%;
    }
    /deep/ .el-progress {
      width: 90%;
    }
    /deep/ .el-progress-bar__inner {
      width: 90%;
      background-color: #febb00;
    }
    /deep/ .el-progress__text {
      color: #fff;
    }
  }
  .data_btn {
    height: 9rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    .btns {
      display: flex;
      width: 14rem;
      height: 3rem;
      line-height: 3rem;
      border-bottom: 0.1rem solid #0385b1;
      background-image: linear-gradient(to top, #294572, #04438b);
      justify-content: space-around;
      align-items: center;
      .img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .data_btn:last-child {
    margin-bottom: 1rem;
  }
}
.box :nth-of-type(4) /deep/ .el-progress-bar__inner {
  background-color: #00f7c0;
}
</style>>

