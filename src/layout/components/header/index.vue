<template>
  <div class="header">
    <div class="header-left">
      <div class="city">嘉兴市</div>
      <!-- <div class="weather">
        <p>多云转晴</p>
        <p>10 ℃</p>
      </div>
      <div class="pm25">
        <p>PM2.5</p>
        <p style="font-weight: 600">36</p>
      </div> -->
      <div class="days">
        <!-- <p>2022-01-20 &nbsp;星期四</p>
        <p>14：22：45</p> -->
        <div id="time">{{ nowTime }}</div>
      </div>
    </div>

    <div class="header-middle">
      <span class="title-icon">
        <el-image :src="titleLeftIcon"></el-image>
      </span>
      <span class="title-text">智慧工地数据可视化平台</span>
      <span class="title-icon">
        <el-image :src="titleRightIcon"></el-image>
      </span>
    </div>

    <div class="header-right">
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-demo nav"
        router
        mode="horizontal"
        text-color="#ffffff"
        active-text-color="#ffffff"
        background-color="#020914"
      >
        <el-menu-item
          class="nav-item"
          v-for="(item, i) in navData"
          :key="i"
          :index="item.url"
        >
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import titleLeftIcon from "@/assets/icon/title-left.0e96a918.png";
import titleRightIcon from "@/assets/icon/title-right.d8c331b0.png";
import navData from "./index";
export default {
  name: "headerComponents",
  data() {
    return {
      navData: navData,
      titleLeftIcon: titleLeftIcon,
      titleRightIcon: titleRightIcon,
      nowTime: "",
      myDate: "",
      myYear: "",
      myMonth: "",
      myToday: "",
      myDay: "",
      myHour: "",
      myMinute: "",
      mySecond: "",
      week: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime() {
      var myDate = new Date();
      this.myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      this.myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      this.myToday = myDate.getDate(); //获取当前日(1-31)
      this.myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      this.myHour = myDate.getHours(); //获取当前小时数(0-23)
      this.myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
      this.mySecond = myDate.getSeconds(); //获取当前秒数(0-59)

      this.nowTime =
        this.myYear +
        "年" +
        fillZero(this.myMonth) +
        "月" +
        fillZero(this.myToday) +
        "日" +
        "  " +
        fillZero(this.myHour) +
        ":" +
        fillZero(this.myMinute) +
        ":" +
        fillZero(this.mySecond) +
        " " +
        this.week[this.myDay] +
        "  ";
      function fillZero(str) {
        var realNum;
        if (str < 10) {
          realNum = "0" + str;
        } else {
          realNum = str;
        }
        return realNum;
      }
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 8rem;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  .city {
    border: 0.2rem solid #fff;
    border-radius: 3rem 0 0 0;
    padding: 0 2rem;
    height: 5rem;
    line-height: 5rem;
    box-shadow: 1px 1px 20px #447be0 inset;
  }
  .days {
    #time {
      font-size: 2rem;
      height: 5rem;
      line-height: 5rem;
      width: 32rem;
      padding: 0 0.5rem;
      text-align: center;
      border: 0.2rem solid #fff;
      box-shadow: 1px 1px 30px #2545d4 inset;
      border-radius: 0 0 3rem 0;
    }
  }
  &-left {
    flex: 25%;
    display: flex;
    // justify-content: space-around;
    // align-items: center;
    font-size: 2.2rem;
    .weather {
      position: relative;
      &::before {
        position: absolute;
        left: -12px;
        top: 6px;
        content: "";
        height: 3.5rem;
        width: 1px;
        background-color: #eee;
      }
      &::after {
        position: absolute;
        right: -12px;
        top: 6px;
        content: "";
        height: 3.5rem;
        width: 1px;
        background-color: #eee;
      }
    }
  }
  &-middle {
    display: flex;
    flex: 50%;
    justify-content: center;
    align-items: center;
    .title-text {
      font-weight: 600;
      font-size: 4rem;
      text-align: center;
      margin: 0 10px;
    }
    .title-icon {
      flex: 0 0 15%;
      margin-top: 5px;
      /deep/ img {
        height: 5rem;
      }
    }
  }
  &-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 25%;
    /deep/ .el-menu--horizontal {
      border-bottom: none !important;
      > .el-menu-item {
        // border-bottom: none;
      }
    }
    .nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &-item {
        cursor: pointer;
        margin-left: 8px;
        color: #ccc;
        display: inline-block;
        // background-image: url("../../../assets/icon/menu-button-disable.3e3ce208.png");
        width: 10rem;
        border: 0.2rem solid #fff;
        border-bottom-color: #fff !important;
        border-radius: 2rem;
        padding: 0 10px;
        text-align: center;
        font-size: 1.6rem;
        height: 3.5rem;
        line-height: 3.3rem;
        box-shadow: 1px 1px 20px #447be0 inset;
        &:hover {
          // background-image: url("../../../assets/icon/menu-button-active.42cf8a0d.png") !important;
          background-color: #017286 !important;
          color: #fff;
        }
      }
      /deep/ .is-active {
        background-color: #017286 !important;
        color: #fff;
        // background-image: url("../../../assets/icon/menu-button-active.42cf8a0d.png") !important;
      }
    }
  }
}
</style>