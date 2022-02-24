<template>
  <div class="boxs">
    <panel-header title="劳务纠纷">
      <div class="content">
        <div class="top">
          <div class="item" v-for="(item, i) in timerData" :key="i">
            <div>
              <img :src="lyIcon" alt="" />
            </div>
            <div class="num">{{ item.num }}<span>起</span></div>
            <div class="time">{{ item.timer }}</div>
          </div>
        </div>
        <div class="bottom">
          <el-table :data="tableData" style="width: 100%;overflow:hidden" height="400">
            <el-table-column
              prop="id"
              align="center"
              label="时间"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="name"
              align="left"
              label="工地名称"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="summary"
              align="center"
              label="事由概述"
              width="160"
            ></el-table-column>
            <el-table-column
              prop="sevenToday"
              align="center"
              width="80"
              label="状态"
            >
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.sevenToday === '已解决' ? '' : 'danger'"
                  disable-transitions
                  >{{ scope.row.sevenToday }}</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </panel-header>
  </div>
</template>

<script>
import lyIcon from "@/assets/icon/ly.png";
export default {
  data() {
    return {
      lyIcon,
      timerData: [
        { num: 30, timer: "近30日" },
        { num: 13, timer: "已解决" },
      ],
      tableData: [
        {
          id: "2021.6.22",
          name: "悦都会小区一期",
          summary: "事件简述事件简述事件简述",
          sevenToday: "未解决",
        },
        {
          id: "2021.6.22",
          name: "濮园香枫苑",
          summary: "事件简述事件简述事件简述",
          sevenToday: "未解决",
        },
        {
          id: "2021.6.22",
          name: "云上府第",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "崇福大众4S店(辅助用房)",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "濮园栖凤苑I标段",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "濮园栖凤苑Ⅱ标段",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "四季华庭",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "研发中心楼（年产1000吨塑料型材建设项目）",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "朗诗绿洲璟院三期",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "四季湘洲小区一标",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "悦都会小区二期",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
        },
        {
          id: "2021.6.22",
          name: "金科时代天悦小区（暂定名）（二期）",
          summary: "事件简述事件简述事件简述",
          sevenToday: "已解决",
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
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.boxs {
  width: 100%;
  box-sizing: border-box;
  /deep/ .title-text {
    font-size: 1.6rem;
  }
 
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
    height: 3.7rem;
    line-height: 3.7rem;
    color: #fff;
  }
  /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
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
    max-height: 40rem;
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
  // 已解决和未解决
  /deep/ .el-tag{
    border: none !important;
    background-color: transparent;
    border-color: transparent;
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
      padding: 1rem 0;
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
    // margin-top: 2rem;
  }
}
</style>