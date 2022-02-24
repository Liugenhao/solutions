<template>
  <div class="boxs">
    <panel-header title="项目监管指数">
      <div class="content">
        <div class="top">
          <div class="item" v-for="(item, i) in timerData" :key="i">
            <div>
              <img :src="phIcon" alt="" />
            </div>
            <div class="num">{{ item.num }}<span>起</span></div>
            <div class="time">{{ item.timer }}</div>
          </div>
        </div>
        <div class="bottom">
          <el-table :data="tableData" style="width: 100%" >
            <el-table-column
              prop="id"
              align="center"
              label="序号"
              width="80"
            ></el-table-column>
            <el-table-column
              prop="name"
              align="left"
              label="项目名称"
              width="210"
            ></el-table-column>
            <el-table-column
              prop="today"
              align="center"
              label="今日次数"
            ></el-table-column>
            <el-table-column
              prop="sevenToday"
              align="center"
              label="近7日次数"
            ></el-table-column>
            <el-table-column
              prop="thirtyToday"
              align="center"
              label="近30日次数"
            ></el-table-column>
            <el-table-column prop="sumNumber" align="center" label="总次数">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </panel-header>
  </div>
</template>

<script>
import phIcon from "@/assets/icon/ph.png";
export default {
  data() {
    return {
      phIcon,
      timerData: [
        { num: 30, timer: "今日" },
        { num: 13, timer: "近7日" },
        { num: 13, timer: "近30日" },
        { num: 13, timer: "本年总数" },
      ],
      tableData: [
        {
          id: 1,
          name: "天元鸣望邸（酒店）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 2,
          name: "天元鸣望邸（住宅）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 3,
          name: "悦都会小区一期",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 4,
          name: "桐乡市庆北区块秋华路北住宅小区",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 5,
          name: "濮园香枫苑",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 6,
          name: "聚酯纺丝一体化车间A区、聚酯纺丝一体化车间B区（年产60万吨轻量舒感功能性差别化纤维项目）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 7,
          name: "云上府第",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 8,
          name: "桐乡市濮院镇2020-66地块",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 9,
          name: "3#车间（年产500万本新工作思维笔记本、500万儿童绘本和说明书 、500万个彩印包装盒配套用房建设项目）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 10,
          name: "崇福大众4S店(辅助用房)",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 11,
          name: "濮园栖凤苑I标段",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 12,
          name: "濮园栖凤苑Ⅱ标段",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 13,
          name: "四季华庭",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 14,
          name: "研发中心楼（年产1000吨塑料型材建设项目）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 15,
          name: "朗诗绿洲璟院三期",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 16,
          name: "四季湘洲小区一标",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 17,
          name: "悦都会小区二期",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
        {
          id: 18,
          name: "金科时代天悦小区（暂定名）（二期）",
          today: 0,
          sevenToday: 0,
          thirtyToday: 0,
          sumNumber: 0,
        },
      ],
    };
  },
  mounted() {
    window.onload = function() {
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
.boxs {
  width: 60%;
  box-sizing: border-box;
  padding-left: 1rem;
 
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
  // /deep/ .cell {
  //   line-height: normal;
  // }
  /deep/ .el-table th.el-table__cell {
    background: transparent;
    text-align: center;
  }
  /deep/ .el-table td.el-table__cell div {
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
  /deep/ .el-table th.el-table__cell.is-leaf {
    border-bottom: 4px solid #002939;
    color: #fff;
    // text-align: center;
    max-width: 20rem;
  }
  /deep/ .el-table__body-wrapper {
    background-color: #002939;
    padding-top: 0.4rem;
    max-height: 44rem;
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
  /deep/ .el-table_2_column_5 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.content {
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0;
      box-sizing: border-box;
      .num {
        display: flex;
        text-align: center;
        align-items: center;
        padding-left: 0.1rem;
        color: #00ebff;
        font-size: 2rem;
      }
      span {
        display: block;
        padding-right: 1rem;
        padding-left: 1rem;
        color: #fff;
        font-size: 1rem;
      }
      div {
        width: 33.33%;
        text-align: center;
      }
      display: flex;
      img {
        width: 100%;
      }
    }
  }
  .bottom {
    // margin-top: 0rem;  
    // padding-bottom: 2rem;
  }
}
</style>