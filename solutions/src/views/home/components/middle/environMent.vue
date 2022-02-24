<template>
  <panel-header-bg title="环境扬尘" height="35">
    <div class="environ-ment">
      <el-row :gutter="10" class="h100">
        <el-col :span="6" class="h100">
          <div class="count-info">
            <div class="info-chart">
              <el-progress
                type="circle"
                :stroke-width="12"
                :percentage="90.8"
                :width="155"
                color="#00EFFF"
                :format="format"
              >
              </el-progress>
            </div>
            <p class="info-text">超标工地数<span>54</span>（个）</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="rank-info">
            <h4 class="rank-title">近30天达标率排行</h4>
            <ul class="rank">
              <li class="rank-item" v-for="(item, i) in rankData" :key="i">
                <div class="num_img">
                  <img
                    :src="i == 0 ? one : i == 1 ? two : i == 2 ? three : ''"
                    alt=""
                  />
                </div>
                <span class="nam">{{ item.name }}</span>
                <span>{{ item.value }}%</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right">
            <div
              class="rank-wrap"
              v-for="(item, index) in rankData2"
              :key="index"
            >
              <h4 class="rank-title">{{ item.type }}</h4>
              <div class="box_lis">
                <ul class="rank-list">
                  <li class="item" v-for="(subitem, i) in item.data" :key="i">
                    <span class="xh">0{{ i + 1 }}</span>
                    <span class="text">{{ subitem.name }}</span>
                    <span class="value">{{ subitem.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </panel-header-bg>
</template>
<script>
import one from "../../../../assets/icon/one.png";
import two from "../../../../assets/icon/two.png";
import three from "../../../../assets/icon/three.png";
export default {
  name: "environMent",
  data() {
    return {
      one,
      two,
      three,
      rankData: [
        { name: "悦都会小区一期工程施工队", value: 96 },
        { name: "濮园香枫苑工程施工队", value: 94 },
        { name: "云上府第工程施工队", value: 92 },
      ],
      rankData2: [
        {
          type: "PM2.5浓度排行",
          data: [
            { name: "濮园栖凤苑I标段工程施工队", value: 99 },
            { name: "濮园栖凤苑Ⅱ标段工程施工队", value: 96 },
            { name: "四季华庭工程施工队", value: 94 },
            { name: "朗诗绿洲璟院三期工程施工队", value: 93 },
            { name: "悦都会小区二期工程施工队", value: 92 },
            { name: "四季湘洲小区一标工程施工队", value: 91 },
          ],
        },
        {
          type: "PM10浓度排行",
          data: [
            { name: "濮园栖凤苑I标段工程施工队", value: 99 },
            { name: "濮园栖凤苑Ⅱ标段工程施工队", value: 96 },
            { name: "云上府第工程施工队", value: 94 },
            { name: "工地名称施工队3", value: 94 },
            { name: "四季华庭工程施工队", value: 93 },
            { name: "朗诗绿洲璟院三期工程施工队", value: 92 },
            { name: "悦都会小区二期工程施工队", value: 91 },
          ],
        },
      ],
    };
  },
  mounted() {
    window.onload = (function () {
      let doms = document.getElementsByClassName("rank-list");
      for (let i = 0; i < doms.length; i++) {
        let dom = doms[i];
        let timer = null;
        const animationEndHandler = () => {
          // appendChild()方法向数组末尾添加元素时，如果该元素已存在数组中，会删除原有位置的元素，然后添加新的元素
          dom.appendChild(dom.children[0]);
          dom.style.cssText = "transform:translate(0,0)";
        };
        const mouseEnterHander = () => {
          clearInterval(timer);
          // timer = null;
          // dom.removeEventListener("transitionend", animationEndHandler);
        };
        const initInterval = () => {
          timer = setInterval(() => {
            if (dom.children[0]) {
              let scrollHeight = dom.children[0].offsetHeight;
              scrollHeight = parseInt(scrollHeight);
              dom.style.cssText = `transform:translate(0rem,-${
                scrollHeight + 10
              }px);transition:all 2s ease;`;
            }
            // fun2();
          }, 3000);
        };
        const mouseLeaveHandler = () => {
          initInterval();
        };
        dom.addEventListener("mouseenter", mouseEnterHander);
        dom.addEventListener("mouseleave", mouseLeaveHandler);
        // 监听过渡动画结束后触发回调
        dom.removeEventListener("transitionend", animationEndHandler);
        dom.addEventListener("transitionend", animationEndHandler);
        initInterval();
      }
    })();
  },
  methods: {
    format(percentage) {
      return `${percentage}%` + "\n" + "本月环境" + "\n" + "超标率";
    },
  },
};
</script>

<style lang="less" scoped>
.environ-ment {
  height: calc(100% - 6rem);
  padding-top: 2rem;
  .rank-title {
    line-height: 5rem;
    text-align: center;
    margin-bottom: 10px;
    background-color: #004e6e;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .count-info {
    flex: 0 0 49%;
    height: 100%;
    text-align: center;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info-chart {
    /deep/ .el-progress__text {
      line-height: 2.6rem;
      white-space: pre-wrap;
      color: #fff;
    }
  }
  .info-text {
    margin-top: 6px;
    font-weight: 600;
    font-size: 1.8rem;
  }
  .rank-info {
    flex: 0 0 49%;
    .rank {
      &-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6rem;
        line-height: 6rem;
        font-size: 1.5rem;
        background-image: url("../../../../assets/icon/shape1.6f80eee5.png");
        padding-right: 1rem;
        background-position: -10px 10px;
        background-size: 24rem 6rem;
        background-repeat: no-repeat;
        .nam {
          width: 12rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .num_img {
          width: 4.35rem;
          height: 3.9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          &:nth-of-type(2) {
            padding: 0 12px;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    .rank-wrap {
      flex: 0 0 49%;
      .box_lis {
        height: 19rem;
        overflow: hidden;
      }
      .rank-list {
        // height: 19rem;
        // overflow: hidden;
        li {
          height: 3.8rem;
          display: flex;
          font-size: 1.5rem;
          align-items: center;
          justify-content: space-around;
          background-color: #00344b;
          margin-bottom: 1rem;
          .text {
            width: 15rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>