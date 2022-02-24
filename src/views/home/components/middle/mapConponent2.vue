<template>
  <panel style="padding:0.2rem;" height="65">
    <div class="map-conponent h100">
      <div class="index-map h100">
        <baidu-map 
          class="map" 
          :center="center" 
          :mapStyle="mapStyle"
          :zoom="zoom"
          :dragging="true"
          :scroll-wheel-zoom="true">
          <div v-for="(marker,index) in markers"
            :key="index">
            <bm-marker
              :position="{lng:marker.position.lng,lat:marker.position.lat}"
              :icon="{url:icons[index],size:{width:40,height:40}}"
              :dragging="false"
              @click="infoWindowOpen(marker)">
              <bm-info-window
                :position="{lng:marker.position.lng,lat:marker.position.lat}"
                :show="marker.showFlag"
                @open="infoWindowOpen(marker)"
                @close="infoWindowClose(marker)">
                <div class="info-window" :class="{bgColor:marker.warning}">
                  <p>工地名称：{{marker.infoWindow.siteName}}</p>
                  <p>接收时间：{{marker.infoWindow.time}}</p>
                  <p v-if="marker.warning == true">无异常</p>
                  <p v-else>异常指标：{{marker.infoWindow.contents}}</p>
                  <div class="triangle" :class="{zcColor:marker.warning}"></div>
                </div>
              </bm-info-window>
            </bm-marker>
          </div>
        </baidu-map>
      </div>
    </div>
    <RadioGoup @handleCheckedRadio="CheckedRadio"/>
  </panel>
</template>
<script>
import mapStyle from '@/assets/json/custom_map_config.json'
import defaultData from './mapjson2.js'
import normalIcon from '@/assets/icon/normal.png'
import errorIcon from '@/assets/icon/error.png'
export default {
  name:"mapConponent",
  data () {
    return {
      zoom: 11,
      mapParam:"数据总览",
      markers: null,
      positionIcon:null,
      //showFlag:false,
      icons:[],
      center:{
        lng:120.75,
        lat:30.75
      },
      mapStyle:{
        styleJson: mapStyle
      },
    }
  },
  created (){},
  mounted(){
    this.$nextTick(function(){
      this.getDefaultData();
    })
  },
  computed:{},
  methods:{
    CheckedRadio (data) {
      this.mapParam = data;
      console.log(this.mapParam)
      this.markers = [];
      this.$nextTick(function(){
        this.getDefaultData();
      })
    },
    getDefaultData () {
      let markers = [];
      defaultData.forEach((item)=>{
        if(this.mapParam == item.type){
          item.data.forEach((subItem)=>{
            //console.log(subItem)
            markers.push({
              position: subItem.position,
              warning:subItem.warning,
              infoWindow:subItem.infoWindow,
              showFlag:false
            });
          });
        }
      })
      this.markers = markers;
      console.log(this.markers);
      this.markers.forEach((marker) =>{
        marker.warning ? 
          this.positionIcon = normalIcon : 
          this.positionIcon = errorIcon;

        this.icons.push(this.positionIcon)
      })
    },
    infoWindowClose (marker) {
      marker.showFlag = false
    },
    infoWindowOpen (marker) {
      marker.showFlag = true
    },
  }
}
</script>
<style lang="less" scoped>
  /deep/ .map{
    width: 100%;
    height: 100%;
  }
  /deep/.el-radio-button__inner{
    background-color: #205da5;
    color: #fff;
  }

     /deep/ .BMap_bottom {
        display: none;
    }
     /deep/ .BMap_pop {
        > div,
        > img:nth-child(10) {
          display: none;
          overflow: visible;
        }
        > div:nth-child(9) {
          display: block;
          overflow: visible;
          width: 340px !important;
          top:40px !important;
        }
        > div:nth-child(8){
            /*display: block;*/
        }
        .BMap_top {
          display: none;
        }
        /deep/ .BMap_center {
          background: transparent;
          border: none;
          position: sticky !important;
          height: 100%;
        }
    }
    .BMap_bubble_content{
      background: rgba(0, 0, 0, .5);
      border-radius: 5px;
      padding: 20px;
    }
  .info-window {
    position: relative;
    background-color: #e62e2d;
    padding: 20px;
    border-radius: 6px;
    p{
      margin-bottom: 10px;
      color: #fff;
    }
    .triangle{
      position: absolute;
      bottom: -58px;
      left:34%;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-top-color: #e62e2d;
    }
    .zcColor {
      border-top-color: #205da5;
    }
  }
  .bgColor {
    background-color: #205da5;
  }
</style>