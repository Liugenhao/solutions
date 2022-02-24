<template>
  <div class="box" style="margin:  1rem">
    <panel-header title="环境扬尘" height="30">
      <!-- <div class="tit one search">全部</div>
      <div class="tit two">只看超标</div> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <el-table :data="tableData" height="240" border style="width: 100%">
            <el-table-column prop="address" label="工地名称" width="130">
            </el-table-column>
            <el-table-column prop="state"  label="工地环境状态" width="105">
            
            </el-table-column>
            <el-table-column
              prop="contaminants"
              label="主要污染物"
              width="90"
            ></el-table-column>
            <el-table-column
              prop="dust"
              label="扬尘"
              width="48"
            ></el-table-column>
            <el-table-column
              prop="pmTwo"
              label="PM2.5"
              width="61"
            ></el-table-column>
            <el-table-column
              prop="pmTen"
              label="PM10"
              width="57"
            ></el-table-column>
            <el-table-column
              prop="noise"
              label="噪音(dB)"
              width="75"
            ></el-table-column>
            <el-table-column
              prop="temperature"
              label="温度(℃)"
              width="75"
            ></el-table-column>
            <el-table-column
              prop="humidity"
              label="湿度(%)"
              width="70"
            ></el-table-column>
            <el-table-column
              prop="wind"
              label="风向"
              width="48"
            ></el-table-column>
            <el-table-column
              prop="speed"
              label="风速(km/h)"
              width="88"
            ></el-table-column>
            <el-table-column
              prop="pressure"
              label="气压(bar)"
              width="78"
            ></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="只看超标" name="second">超标信息</el-tab-pane>
      </el-tabs>
    </panel-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",

      tableData: [
        {
          address: "朗诗绿洲璟院三期",
          state: "超标",
          contaminants: "PM10",
          dust: "101",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
        {
          address: "濮园栖凤苑I标段",
          state: "正常",
          contaminants: "正常",
          dust: "10",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
        {
          address: "濮园栖凤苑Ⅱ标段",
          state: "正常",
          contaminants: "正常",
          dust: "10",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
        {
          address: "四季湘洲小区一标",
          state: "正常",
          contaminants: "正常",
          dust: "10",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
        {
          address: "悦都会小区二期",
          state: "正常",
          contaminants: "正常",
          dust: "10",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
        {
          address: "金科时代天悦小区（暂定名）（二期）",
          state: "正常",
          contaminants: "正常",
          dust: "10",
          pmTwo: "30",
          pmTen: "30",
          noise: "30",
          temperature: "30",
          humidity: "30",
          wind: "",
          speed: "30",
          pressure: "30",
        },
      ],
    };
  },
  mounted() {
    window.onload = (function () {
      const dom = document.getElementsByTagName("tbody")[1];
      let timer = null;
      const animationEndHandler = () => {
        // appendChild()方法向数组末尾添加元素时，如果该元素已存在数组中，会删除原有位置的元素，然后添加新的元素
        dom.appendChild(dom.children[0]);
        dom.style.cssText = "transform:translate(0,0)";
      };
      const mouseEnterHander = () => {
        clearInterval(timer);
        timer = null;
        dom.removeEventListener("transitionend", animationEndHandler);
      };
      const initInterval = () => {
        timer = setInterval(() => {
          if (dom.children[0]) {
            let scrollHeight = dom.children[0].offsetHeight;
            scrollHeight = parseInt(scrollHeight);
            dom.style.cssText = `transform:translate(0px,-${
              scrollHeight + 0
            }px);transition:all 2s ease;`;
          }
          fun2();
        }, 3000);
      };
      const mouseLeaveHandler = () => {
        initInterval();
        dom.addEventListener("transitionend", animationEndHandler);
      };
      initInterval();
      dom.addEventListener("mouseenter", mouseEnterHander);
      dom.addEventListener("mouseleave", mouseLeaveHandler);
      // 监听过渡动画结束后触发回调
      function fun2() {
        dom.removeEventListener("transitionend", animationEndHandler);
        dom.addEventListener("transitionend", animationEndHandler);
      }
    })();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  /deep/ .el-table thead{
    color: #fff;
  }
  /deep/.el-tabs__header {
    position: absolute;
    right: 0;
    top: 1rem;
    width: 20rem;
  }
  /deep/ .el-tabs__active-bar {
    display: none !important;
  }
  /deep/.el-tabs__nav-wrap::after {
    display: none;
  }
  /deep/.el-tabs__item.is-active {
    background-color: #01baf2 !important;
    color: #fff !important;
  }
  /deep/.el-tabs__item{
    padding: 0 !important;
    width: 8rem;
    text-align: center;
    border-radius: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    color: #3392DE;
    background-color: #0A3F6C;
    margin-right: 1rem;
  }
  .tit {
    width: 7rem;
    text-align: center;
    background-color: #0a3f6c;
    color: #308bd5;
    border-radius: 0.5rem;
    padding: 0.2rem;
  }
  .red {
    color: red;
  }
  .one,
  .two {
    position: absolute;
    top: 0.8rem;
  }
  .one {
    right: 10rem;
  }
  .two {
    right: 0.1rem;
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
  
  /deep/ .el-table__body {
    width: 100% !important;
  }
  /deep/ .el-table {
    font-size: 1.2rem;
  }
  /deep/ .el-table::before {
    background-color: "";
  }
  /deep/ .el-table::before {
    height: 0;
  }
  /deep/ .el-table .el-table__cell {
    padding: 0;
  }
  /deep/ .cell {
    line-height: normal;
  }
  /deep/ .el-table th.el-table__cell {
    background: transparent;
    text-align: center;
  }
  /deep/.el-table--border .el-table__cell,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border: none;
  }
  /deep/ .el-table--border,
  .el-table--group {
    border: none;
  }
  //   /deep/ .el-table__footer-wrapper,
  //   /deep/.el-table__header-wrapper {
  //     display: none;
  //   }

  /deep/ .el-table tr {
    background-color: #294572;
    height: 4rem;
    line-height: 4rem;
  }
  /deep/
    .el-table--enable-row-hover
    .el-table__body
    tr:hover
    > td.el-table__cell {
    background-color: #01baf2;
  }
  /deep/ .el-table td.el-table__cell,
 /deep/ .el-table th.el-table__cell.is-leaf {
    border-bottom: 4px solid #002939;
    color: #fff;
    text-align: center;
    
  }
  /deep/ .el-table__body-wrapper {
    background-color: #002939;
  }
  /deep/.el-table--border::after,
  /deep/ .el-table::before {
    background: none !important;
  }
}
</style>