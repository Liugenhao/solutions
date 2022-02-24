<template>
  <div class="box">
    <div class="top">
      <div class="t_left">
        <div class="location">
          <el-input
            v-model="input"
            placeholder=""
            prefix-icon="el-icon-location-outline"
          ></el-input>
        </div>
        <div class="search">
          <el-input
            v-model="input2"
            placeholder="请输入工地名搜索"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
      </div>
      <div class="t_right">
        <div class="btn">
          <div v-for="(item, i) in btns" :key="i">
            <img :src="item" alt="" @click="btn(i)" />
          </div>
        </div>
      </div>
    </div>
    <div :class=" index == 0 ? 'bottom1': index == 1 ? 'bottom2' : index == 2 ? 'bottom3' : ''" >
      <panel class="item" ref="item" v-for="(item, i) in num" :key="i">
        <img :src="gd" alt="" />
      </panel>
    </div>
  </div>
</template>

<script>
import one from "./one.less";
import two from "./two.less";
import three from "./three.less";
import gd from "@/assets/img/gd/1.png";
import btn1 from "@/assets/icon/btn1.png";
import btn2 from "@/assets/icon/btn2.png";
import btn3 from "@/assets/icon/btn3.png";
export default {
  data() {
    return {
      num: 12,
      btns: [btn1, btn2, btn3],
      index: 0,
      one,
      two,
      three,
      gd,
      input: "嘉兴-桐乡",
      input2: "",
    };
  },

  mounted() {
    this.$nextTick(function () {});
  },
  methods: {
    btn(i) {
      console.log(i);
      if (i == 0) {
        this.num = 12;
      } else if (i == 1) {
        this.num = 9;
      } else {
        this.num = 6;
      }
      this.index = i;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  .top {
    height: 8rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .t_left {
      width: 45rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      /deep/ .el-input {
        width: auto !important;
      }
      /deep/ .search {
        width: auto;
      }
      /deep/ .el-input__inner {
        border-radius: 2rem;
        background-color: transparent;
        color: #fff;
        border: 0.1rem solid #01bcf5;
        box-shadow: 0 0 1rem 0.1rem #01bcf5 inset;
      }
      /deep/ .el-icon-location-outline {
        color: #01bdf6;
      }
      /deep/.el-input__suffix{
        right: 1rem;
      }
    }
    .t_right {
      width: 40rem;
      margin-right: 2rem;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;
      .btn {
        display: flex;
        width: 24rem;
        height: 4rem;
        // margin-right: 2rem;
        div {
          border-right: 0.01rem solid #aaa;
          padding: 0 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        div:nth-of-type(3) {
          border: none;
        }
      }
    }
  }
}
</style>