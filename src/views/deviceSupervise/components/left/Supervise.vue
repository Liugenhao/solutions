<template>
  <div class="box">
    <panel-header title="项目监管指数">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="80"> </el-table-column>
        <el-table-column prop="name" label="项目名称"> </el-table-column>
        <el-table-column prop="number" label="综合指数" width="150">
        </el-table-column>
      </el-table>
    </panel-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          number: 0,
          name: "青成名苑",
        },
        {
          id: 2,
          number: 0,
          name: "东恒控股新建厂区(年生产高档...",
        },
        {
          id: 3,
          number: 0,
          name: "B3商住楼(濮院镇2012-02经营性地块)",
        },
        {
          id: 4,
          number: 0,
          name: "桐乡市图书馆迁建工程(金仲华故居纪",
        },
        {
          id: 5,
          number: 0,
          name: "崇福大众4S店(辅助用房)",
        },
        {
          id: 6,
          number: 0,
          name: "滨河紫金苑",
        },
        {
          id: 7,
          number: 0,
          name: "君豪尚庭",
        },
        {
          id: 8,
          number: 0,
          name: "晴芳园二期",
        },
        {
          id: 9,
          number: 0,
          name: "桂语轩",
        },
        {
          id: 10,
          number: 0,
          name: "四季湘洲小区二标",
        },
        {
          id: 11,
          number: 0,
          name: "天元鸣望邸（住宅）",
        },
        {
          id: 12,
          number: 0,
          name: "云上府第",
        },
        {
          id: 13,
          number: 0,
          name: "桐乡市濮院镇2020-66地块",
        },
        {
          id: 14,
          number: 0,
          name: "金科时代天悦小区（一期二标段）",
        },
        {
          id: 15,
          number: 0,
          name: "金科时代天悦小区（一期一标段）",
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
/deep/ .panel-header{
  margin-bottom: 0.8rem;
}
.box {
 
  /deep/ .el-table,
  /deep/ .el-table__expanded-cell {
    background: #294572;
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

  /deep/ .el-table tr {
    background-color: #294572;
    height: 4rem;
    line-height: 4rem;
    color: #fff;
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
    border-bottom: 4px solid #002939;
    color: #fff;
    text-align: center;
  }
  /deep/ .el-table__body-wrapper {
    background-color: #002939;
    padding-top: 0.4rem;
    height: 23.5rem;
  }
  /deep/.el-table--border::after,
  /deep/ .el-table::before {
    background: none !important;
  }
  /deep/ .el-table th.el-table__cell.is-leaf {
    border-bottom: none;
  }
  /deep/ .has-gutter tr {
    background-color: #054e76;
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
}
</style>