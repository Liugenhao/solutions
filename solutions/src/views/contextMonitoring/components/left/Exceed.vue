<template>
  <div class="box">
    <panel-header-bg title="超标工地">
      <el-table height="210" :data="tableData" style="width: 100%">
        <el-table-column prop="date" width="40"></el-table-column>
        <el-table-column prop="address"> </el-table-column>
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
          address: "天元鸣望邸（酒店）",
        },
        {
          date: "02",
          address: "天元鸣望邸（住宅）",
        },
        {
          date: "03",
          address: "悦都会小区一期",
        },
        {
          date: "04",
          address: "桐乡市庆北区块秋华路北住宅小区",
        },
        {
          date: "05",
          address: "濮园香枫苑",
        },
        {
          date: "06",
          address: "濮园栖凤苑I标段",
        },
        {
          date: "07",
          address: "云上府第",
        },
        {
          date: "08",
          address: "崇福大众4S店(辅助用房)",
        },
        {
          date: "09",
          address: "濮园栖凤苑Ⅱ标段",
        },
        {
          date: "10",
          address: "四季华庭",
        },
      ],
    };
  },
  mounted() {
     window.onload = function() {
        const dom = document.getElementsByTagName("tbody")[0];
        let timer = null;
        const animationEndHandler = () => {
           // appendChild()方法向数组末尾添加元素时，如果该元素已存在数组中，会删除原有位置的元素，然后添加新的元素
          dom.appendChild(dom.children[0]);
          dom.style.cssText = "transform:translate(0,0)";
         
        };
                const mouseEnterHander = () => {
          clearInterval(timer);
          timer = null;
          dom.removeEventListener("transitionend",animationEndHandler );
        };
        const initInterval = () => {
          timer = setInterval(() => {
            if (dom.children[0]) {
              let scrollHeight = dom.children[0].offsetHeight;
              scrollHeight = parseInt(scrollHeight);
              dom.style.cssText = `transform:translate(0px,-${scrollHeight +
                0}px);transition:all 2s ease;`;
            }
            fun2();
          }, 3000);
        };
        const mouseLeaveHandler = () => {
          initInterval();   
        dom.addEventListener("transitionend",animationEndHandler );
        };
        initInterval();
        
        dom.addEventListener("mouseenter", mouseEnterHander);
        dom.addEventListener("mouseleave", mouseLeaveHandler);
        // 监听过渡动画结束后触发回调
       function fun2(){
          dom.removeEventListener("transitionend",animationEndHandler );
        dom.addEventListener("transitionend", animationEndHandler);
       }
      }();
  },
};
</script>


<style lang="less" scoped>
.box {
  /deep/.el-table--scrollable-y .el-table__body-wrapper{
    overflow: hidden;
  }
  /deep/.el-table, /deep/.el-table__expanded-cell{
    background-color: none;
  }
 
  /deep/ .el-table, /deep/ .el-table__expanded-cell{
    background-color: none;
  }
  /deep/ .el-table::before {
    height: 0;
  }
  /deep/ .el-table .el-table__cell {
    padding: 0;
  }
  /deep/ .cell {
    line-height: 2.5rem;
  }
  /deep/ .el-table__footer-wrapper,
  /deep/.el-table__header-wrapper {
    display: none;
  }

  /deep/ .el-table tr {
    background-color: #294572;
  }
  /deep/.el-table__body{
    width: 100% !important;
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
    border-bottom: 0.6rem solid #002939;
    color: #fff;
  }
  /deep/ .el-table__body-wrapper {
    background-color: #002939;
  }
}
</style>
