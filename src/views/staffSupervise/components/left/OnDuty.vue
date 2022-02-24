<template>
  <div class="box">
    <panel-header title="在岗人员">
      <div class="content">
        <div id="left">
          <div class="data_box" v-for="(item, i) in siteData" :key="i">
            <div class="tit">{{ item.name }}</div>
            <el-progress :percentage="item.value" :format="format" ></el-progress>
          </div>
        </div>
        <div class="mak"></div>
        <div class="right">
          <div class="with">{{ itemData.address }}</div>
          <el-avatar class="with" :size="70" :src="itemData.url"></el-avatar>
          <div class="name with">{{ itemData.name }}</div>
          <div class="with">入场时间</div>
          <div class="with">{{ itemData.intTime }}</div>
          <div class="with">出场时间</div>
          <div class="with">{{ itemData.outTime }}</div>
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
        { name: "朗诗绿洲璟院三期", value: 80.8 },
        { name: "四季湘洲小区一标", value: 86.7 },
        { name: "悦都会小区二期", value: 78.6 },
        { name: "云上府第", value: 78.5 },
        { name: "濮园栖凤苑I标段", value: 78.4 },
        { name: "濮园栖凤苑Ⅱ标段", value: 78.3 },
        { name: "桐乡市庆北区块秋华路北住宅小区", value: 78.2 },
        { name: "朗诗绿洲璟院三期", value: 78.1 },
      ],
      itemData: {
        address: "云上府第",
        url: "https://img0.baidu.com/it/u=2272410241,1594394666&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=480",
        name: "郭富城",
        intTime: "2021.11.1 13:00",
        outTime: "2021.11.10 13:00",
      },
    };
  },
  mounted() {
    window.onload = function() {
        const dom = document.getElementById("left");
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
    width: 82%;
  }
  .content {
    display: flex;
    overflow: hidden;
    #left {
      width: 60%;
      // overflow: auto;
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
    .mak {
      float: left;
      width: 0.1rem;
      margin: 0 1rem;
      background: #394d58;
    }
    .right {
      width: 40%;
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      justify-content: center;
      .with {
        width: 100%;
      }
      .name {
        color: #029ccd;
      }
    }
  }
}
</style>