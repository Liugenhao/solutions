<template>
  <panel-header-bg title="工地统计" height="17">
    <div class="site-statistics flex3">
      <el-row :gutter="10" style="width:100%">
        <el-col 
          :span="8"
          v-for="(item,i) in initData"
          :key="i">
          <div class="box">
            <div class="l-img">
              <el-image :src="imgicon[i]"></el-image>
            </div>
            <div class="r-text">
              <p style="margin-bottom:6px;">{{item.text}}</p>
              <p style="color:#00EFFF;">{{item.count}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </panel-header-bg>
</template>
<script>
import userImg from "@/assets/img/user.png"
import shepeiImg from "@/assets/img/sb.png"
import shipingImg from "@/assets/img/sp.png"
import { getSiteStatisticsData } from '@/api/index/index'
export default {
  name:"siteStatisics",
  data () {
    return {
      imgicon:[shepeiImg,userImg,shipingImg],
      initData:[
        {text:"在建工地数",count:"1024"},
        {text:"工地人数",count:"2016"},
        {text:"视频监控",count:"328"},
      ]
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.getData()
    })
  },
  methods:{
    getData() {
      getSiteStatisticsData().then(res =>{
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .site-statistics {
    height: calc(100% - 3rem);
    width: 100%;
    .box {
      display: flex;
      width: 100%;
      height: 100%;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }
    .l-img {
      margin-right: 10px;
      /deep/ img{
        width: 5rem;
      }
    }
    .r-text {
      p{
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
</style>