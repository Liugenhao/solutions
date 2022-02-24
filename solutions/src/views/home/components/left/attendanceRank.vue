<template>
  <panel-header-bg title="当前出勤工地人数排行" height="32">
    <div class="attendance-rank ">
      <el-scrollbar style="height:100%">
        <div 
          class="progress-box"
          v-for="(item,i) in progressData"
          :key="i">
          <p class="rank-text">{{item.name}}</p>
          <el-progress :percentage="item.value"></el-progress>
        </div>
      </el-scrollbar>
    </div>
  </panel-header-bg>
</template>
<script>
//import { getTest,postTest } from '@/api/test'
export default {
  name:"attendanceRank",
  data () {
    return {
      progressData:[
        {name:"悦都会小区一期工程施工队",value:99.7},
        {name:"濮园香枫苑工程施工队",value:99.6},
        {name:"云上府第工程施工队",value:99.5},
        {name:"濮园栖凤苑I标段工程施工队",value:99.4},
        {name:"濮园栖凤苑Ⅱ标段工程施工队",value:99.3},
        {name:"四季华庭工程施工队",value:99.3},
        {name:"朗诗绿洲璟院三期工程施工队",value:99.3},
        {name:"悦都会小区二期工程施工队",value:99.3},
        {name:"四季湘洲小区一标工程施工队",value:99.3},
      ],
      id:123,
      data:{
        name:"okc",
        age:"20"
      }
    }
  },
  mounted() {

    window.onload = function() {
      const dom = document.getElementsByClassName("el-scrollbar__view")[0];
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
              15}px);transition:all 2s ease;`;
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
  methods:{
    // getDataTest (){
    //   getTest(this.id).then(res=>{
    //     console.log(res)
    //   })
    //   postTest(this.data).then(res =>{
    //     console.log(res)
    //   })
    // }
  }
}
</script>
<style lang="less" scoped>

  .attendance-rank{
    height: 25rem;
    overflow: hidden;
    .progress-box{
      margin-bottom: 1.5rem;
      .rank-text{
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
      }
    }
    /deep/ .el-progress-bar__inner{
      background-image: linear-gradient(to right,#096280,#00FFC2);
    }
    /deep/ .el-progress__text{
      color: #fff;
      margin-left: 12px;
    }
    /deep/ .el-scrollbar__view{
      overflow: hidden;
    }
  }
  
</style>