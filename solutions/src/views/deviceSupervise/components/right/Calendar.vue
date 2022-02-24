<template>
  <panel-header title="升降机监管日历">
    <div class="calendar_box">
      <el-calendar v-model="value" :first-day-of-week="7">
        <!-- <template slot="dateCell" slot-scope="{ date, data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(2).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>
        </template> -->
      </el-calendar>
    </div>
  </panel-header>
</template>


<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
/deep/ .panel-header{
  height: 3.3rem;
}
.calendar_box {
  height: 100%;
  text-align: center;
  /deep/.el-button{
    background-color: #3150B0 !important;
  }
  /deep/.el-calendar__header{
    padding: 5px 20px;
  }
  /deep/ .el-calendar__title{
    color: #fff;
    font-size: 1.6rem;
  }
  /deep/ .el-calendar {
    background: none;
  }
  /deep/ .el-calendar__body {
    padding: 1rem !important;
  }
  /deep/ .el-calendar-table .el-calendar-day {
    height: 2.77rem;
    line-height: 2.77rem;
    padding: 0;
    font-size: 1.6rem;
    
  }
  /deep/.el-calendar-table:not(.is-range) td.next,/deep/ .el-calendar-table:not(.is-range) td.prev{
    color: #888;      
  }
  /deep/ .el-calendar-table thead th {
    padding: 9px 0;
  }
  /deep/ caption,
  /deep/ th {
    text-align: center;
    color: #fff;
    border: none;
  }
  /deep/.el-button {
    background: none;
  }
  /deep/ .el-button--mini,/deep/ .el-button--small{
    color: #fff !important;
  }
  /deep/ .el-calendar-table td.is-selected {
    background-color: #02b4ea !important;
    color: #fff !important;
  }
  /deep/ .el-calendar-table .el-calendar-day:hover {
    background-color: #02b4ea !important;
    color: #fff !important;
  }
  /deep/.el-calendar-table td {
    border: none !important;
  }
}
</style>