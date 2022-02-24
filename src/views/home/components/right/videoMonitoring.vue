<template>
  <panel-header-bg title="视频监控" height="28">
    <div class="video-monitoring flex3">
      <div class="carousel-content">
        <el-carousel indicator-position="outside" arrow="never" height="185px">
          <el-carousel-item 
            v-for="item in 3" :key="item">
              <el-row :gutter="10">
                <el-col 
                  :span="8"
                  v-for="(item,index) in videoLists"
                  :key="index"
                  style="margin-bottom:10px;">
                  <div class="block" @click="viewsVideo(index)">
                    <el-image :src="item.vimg"></el-image>
                    <p class="text">{{item.title}}</p>
                  </div>
                </el-col>
              </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-dialog
        title="视频播放"
        center
        :visible.sync="dialogVisible"
        width="60%"
        :modal="true"
        :append-to-body="true"
        :before-close="handleClose">
        <div class="video-content">
          播放视频
        </div>
      </el-dialog>
    </div>  
  </panel-header-bg>
</template>
<script>
import v1 from "@/assets/img/gd/1.jpg"
import v2 from "@/assets/img/gd/2.jpg"
import v3 from "@/assets/img/gd/3.jpg"
export default {
  name:"videoMonitoring",
  data () {
    return {
      dialogVisible:false,
      videoLists:[
        {title:"工地1视频监控",vimg:v1,vurl:"https://www.baidu.com"},
        {title:"工地2视频监控",vimg:v2,vurl:"https://www.360s.com"},
        {title:"工地3视频监控",vimg:v3,vurl:"https://www.hao123.com"},
        {title:"工地4视频监控",vimg:v1,vurl:"https://www.google.com"},
        {title:"工地5视频监控",vimg:v2,vurl:"https://www.element.eleme.cn"},
        {title:"工地6视频监控",vimg:v3,vurl:"https://www.alyun.eleme.cn/"},
      ]
    }
  },
  methods:{
    viewsVideo () {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
}
</script>
<style lang="less" scoped>
  .video-monitoring {
    width: 100%;
    height: calc(100% - 3rem);
    .carousel-content {
      width: 100%;
      height: 100%;
      .block {
        position: relative;
        border: 1px solid #00C7FF;
        border-radius: 3px;
        cursor: pointer;
        .text {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          color:#fff;
          height: 2.6rem;
          line-height: 2.6rem;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.6);
        }
        /deep/ .el-image {
          width: 100%;
          height: 8rem;
          text-align: center;
        }
      }
      /deep/ .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 5px;
      }
    }
  }
</style>