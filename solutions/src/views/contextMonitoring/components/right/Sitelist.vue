<template>
  <div class="box">
    <panel-header-bg title="工地列表">
      <el-table height="340" :data="tableData" style="width: 100%">
        <el-table-column prop="date" width="40"></el-table-column>
        <el-table-column prop="address" width="260"> </el-table-column>
        <el-table-column prop="num" width="50"></el-table-column>
        <el-table-column>
          <!-- <el-button @click="handleClick(scope.row)" type="text">查看</el-button > -->
          <template slot-scope="scope">
            <el-button 
              @click="handleClick(scope.row)" 
              type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </panel-header-bg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "01",
          num: "90%",
          address: "天元鸣望邸（酒店）",
        },
        {
          date: "02",
          num: "90%",
          address: "天元鸣望邸（住宅）",
        },
        {
          date: "03",
          num: "90%",
          address: "悦都会小区一期",
        },
        {
          date: "04",
          num: "90%",
          address: "桐乡市庆北区块秋华路北住宅小区",
        },
        {
          date: "05",
          num: "90%",
          address: "濮园香枫苑",
        },
        {
          date: "06",
          num: "90%",
          address: "聚酯纺丝一体化车间A区、聚酯纺丝一体化车间B区（年产60万吨轻量舒感功能性差别化纤维项目）",
        },
        {
          date: "07",
          num: "90%",
          address: "云上府第",
        },
        {
          date: "08",
          num: "90%",
          address: "桐乡市濮院镇2020-66地块",
        },
        {
          date: "09",
          num: "90%",
          address: "崇福大众4S店(辅助用房)",
        },
        {
          date: "10",
          num: "90%",
          address: "濮园栖凤苑I标段",
        },
      ],
    };
  },
  mounted() {
    window.onload = (function () {
      const dom = document.getElementsByTagName("tbody")[2];
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
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  /deep/.el-table__body {
    width: 100% !important;
  }

  /deep/ .el-table::before {
    height: 0;
  }
  /deep/ .el-table .el-table__cell {
    padding: 0;
  }
  /deep/ .cell {
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /deep/ .el-table__footer-wrapper,
  /deep/.el-table__header-wrapper {
    display: none;
  }
  /deep/ .el-button {
    border: 0;
    background-color: transparent;
    outline: none;
    color: #87ff00;
    padding: 1rem 2rem;
  }
  /deep/ .el-table tr {
    background-color: #294572;
  }
  /deep/
    .el-table--enable-row-hover
    .el-table__body
    tr:hover
    > td.el-table__cell {
    background-color: #01baf2;
  }
  /deep/ .el-table td.el-table__cell,
  .el-table th.el-table__cell.is-leaf {
    border-bottom: 0.4rem solid #002939;
    color: #fff;
  }
  /deep/ .el-table__body-wrapper {
    background-color: #002939;
  }
}
</style>