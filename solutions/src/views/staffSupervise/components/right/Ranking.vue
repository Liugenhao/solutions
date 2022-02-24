<template>
  <div class="box">
    <panel-header title="考勤排行榜">
      <div class="content">
        <div class="left">
          <div class="data_box" v-for="(item, i) in siteData" :key="i">
            <div class="tit">{{ item.name }}</div>
            <el-progress
              :percentage="item.value"
              :format="format"
            ></el-progress>
          </div>
        </div>
      </div>
    </panel-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteData: [
        { name: "濮园栖凤苑I标段", value: 80.8 },
        { name: "濮园栖凤苑Ⅱ标段", value: 86.8 },
        { name: "四季华庭", value: 78.8 },
        { name: "朗诗绿洲璟院三期", value: 78.8 },
        { name: "四季湘洲小区一标", value: 78.8 },
        { name: "悦都会小区二期", value: 78.8 },
        { name: "金科时代天悦小区（暂定名）（二期）", value: 78.8 },
        { name: "悦都会小区一期", value: 78.8 },
      ],
      itemData: {
        address: "朗诗绿洲璟院三期",
        url: "https://img0.baidu.com/it/u=2272410241,1594394666&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=480",
        name: "郭富城",
        intTime: "2021.11.1 13:00",
        outTime: "2021.11.10 13:00",
      },
    };
  },
  mounted() {
     window.onload = function() {
        const dom = document.getElementsByClassName("left")[0];
        let timer = null;
        const animationEndHandler = () => {
           // appendChild()方法向数组末尾添加元素时，如果该元素已存在数组中，会删除原有位置的元素，然后添加新的元素
          dom.appendChild(dom.children[0]);
          dom.style.cssText = "transform:translate(0,0)";
         
        };
        const mouseEnterHander = () => {
          clearInterval(timer);
        };
        const initInterval = () => {
          timer = setInterval(() => {
            if (dom.children[0]) {
              let scrollHeight = dom.children[0].offsetHeight;
              scrollHeight = parseInt(scrollHeight);
              dom.style.cssText = `transform:translate(0px,-${scrollHeight +
                0}px);transition:all 2s ease;`;
            }
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
      }();  
  },
  methods: {
    format(percentage) {
      return percentage === 1000
        ? `1000人${percentage}%``${percentage}%`
        : `1000人 ${percentage}%`;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
 
  // 进度条
  /deep/ .el-progress-bar__outer {
    background-color: #32638c;
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
  /deep/ .el-progress-bar {
    width: 88%;
  }
  .content {
    display: flex;
    overflow: hidden;
    .left {
      width: 100%;
      max-height: 36rem;
      .el-progress {
        line-height: 2;
      }
      .data_box {
        display: flex;
        height: 6rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        .tit {
          display: block;
          width: 100%;
        }
        /deep/ .el-progress {
          width: 100%;
        }
        /deep/ .el-progress-bar__inner {
          width: 90%;
          background-color: #febb00;
          background-image: linear-gradient(to right, #306386, #00fdc0);
        }
        /deep/ .el-progress__text {
          color: #fff;
        }
      }
    }
  }
}
</style>