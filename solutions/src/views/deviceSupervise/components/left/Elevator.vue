<template>
  <div class="box">
    <panel-header title="升降机监管概况">
      <div class="content">
        <div class="left">
          <ul>
            <li v-for="(item, i) in information" :key="i">
              <div class="img_box"><img :src="item.img" alt="" /></div>
              <div class="tit">{{ item.tit }}</div>
              <div class="num">{{ item.num }}</div>
            </li>
          </ul>
        </div>
        <div style="float: left; width: 0.1rem; background: #394d58"></div>
        <div class="right">
          <div class="lef_box">
            <img :src="jdIcon" alt="" />
          </div>
          <div class="rig_box">
            <div class="tit_top">
              <div class="num2">2775</div>
              <div class="tit2">正常项目</div>
            </div>
            <div class="tit_bot">
              <div class="num3">925</div>
              <div class="tit3">报警项目</div>
            </div>
          </div>
        </div>
      </div>
    </panel-header>
  </div>
</template>

<script>
import xxIcon from "@/assets/icon/xx.png";
import jdIcon from "@/assets/icon/jd.png";
export default {
  data() {
    return {
      jdIcon,
      information: [
        {
          img: xxIcon,
          tit: "在建项目",
          num: "2775",
        },
        {
          img: xxIcon,
          tit: "接入项目",
          num: "2775",
        },
        {
          img: xxIcon,
          tit: "异常项目",
          num: "2775",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  div {
    width: 100%;
    // border: 1px solid red;
  }
  /deep/ .title-text {
    flex-basis: auto;
    white-space: nowrap;
    border-left: 0.4rem solid #00c7ff;
    line-height: 1.4rem;
    display: inline-block;
    padding-left: 0.6rem;
    font-weight: 600;
    font-size: 1.6rem;
  }
  .content {
    display: flex;
    .left {
      width: 40%;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 23rem;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 2rem;
          .img_box img {
            width: 70%;
            height: 70%;
          }
          .tit {
            color: #eee;
          }
          .num {
            color: #00ebff;
            font-size: 1.8rem;
          }
        }
      }
    }
    .right {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      .lef_box {
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 2rem;
        img {
          width: 100%;
        }
      }
      .rig_box {
        text-align: center;
        width: 45%;

        .tit_top,
        .tit_bot {
          display: flex;
          height: 3rem;
          line-height: 3rem;
        }
      }
      .num2 {
        font-size: 1.6rem;
        color: #0ddd21;
      }
      .num3 {
        font-size: 1.6rem;
        color: #ef6d03;
      }
    }
  }
}
</style>