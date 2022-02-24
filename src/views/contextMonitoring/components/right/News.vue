<template>
  <div class="box">
    <panel-header-bg title="消息通知">
      <el-table height="240" :data="tableData" style="width: 100%">
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
          address: "悦都会小区一期",
        },
        {
          address: "濮园栖凤苑I标段",
        },
        {
          address: "濮园栖凤苑Ⅱ标段",
        },
        {
          address: "朗诗绿洲璟院三期",
        },
        {
          address: "悦都会小区二期",
        },
      ],
    };
  },
  mounted() {
     window.onload = function() {
        const dom = document.getElementsByTagName("tbody")[3];
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
  margin-top: 1.2rem;
  /deep/ .el-table__body-wrapper{
    background-color: #002939;
  }
  /deep/ .el-table::before {
    height: 0;
  }
  /deep/ .el-table .el-table__cell {
    padding: 0.1rem 0;
  }
  /deep/ .cell {
    line-height: 5rem;
    margin-bottom: 2px;
    background-color: #294572;
    &:hover{
      background-color: #01baf2;
    }
  }
  /deep/ .el-table__footer-wrapper,
  /deep/.el-table__header-wrapper {
    display: none;
  }

  /deep/ .el-table tr {
    background-color: transparent;
    height: 5rem;
    line-height: 5rem;
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
    border-bottom: 0.1rem dashed #444444;
    color: #fff;
  }

}
</style>