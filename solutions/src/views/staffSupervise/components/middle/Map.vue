<template>
  <panel style="padding: 2px; margin: 0 10px" height="71">
    <div class="map-conponent" style="height: 100%">
      <div class="index-map" style="height: 100%">
        <!--<el-amap
          :zoom="zoom"
          zIndex="9"
          :center="mapCenter"
          mapStyle="dark"
          :events="mapEvents">
          <el-amap-circle-marker
            v-for="(marker, index) in markers"
            :key="index"
            :center="marker.center"
            :content="marker.content"
            :strokeColor="marker.strokeColor"
            :strokeWeight="1"
            :stroke-opacity="0.4"
            :radius="18"
            :fill-color="marker.fillColor"
            :fill-opacity="0.6"
            :events="marker.events">
          </el-amap-circle-marker>
        </el-amap>-->
        <baidu-map
          class="bd-map"
          :center="mapCenter"
          :mapStyle="mapStyle"
          :zoom="zoom"
          :dragging="true"
          :scroll-wheel-zoom="true">
          <div 
            class="bd-map-marker"
            v-for="(marker,i) in markers"
            :key="i">
            <bm-marker
              :position="{lng:marker.position.lng,lat:marker.position.lat}"
              :icon="{url:icons[i],size:{width:40,height:40}}"
              :dragging="false"
              @click="infoWindowOpen(marker)">
              <bm-info-window
                :position="{lng:marker.position.lng,lat:marker.position.lat}"
                :show="marker.showFlag"
                @open="infoWindowOpen(marker)"
                @close="infoWindowClose(marker)">
                <div 
                  class="info-window" 
                  :class="{bgColor:marker.warning}">
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
  </panel>
</template>
<script>
import defaultData from './map.js'
import mapStyle from '@/assets/json/custom_map_config.json'
import normalIcon from '@/assets/icon/normal.png'
import errorIcon from '@/assets/icon/error.png'
export default {
  name: "rymapConponent",
  data() {
    return {
      zoom: 10,
      icons:[],
      markers: null,
      positionIcon:null,
      mapCenter:{
        lng:120.78483,
        lat: 30.74744
      },
      mapStyle:{
        styleJson: mapStyle
      },
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function(){
      this.getMapData();
    })
  },
  methods: {
    getMapData() {
      let markers = [];
      defaultData.forEach((item) =>{
        markers.push({
          position:item.position,
          warning:item.warning,
          infoWindow:item.infoWindow,
          showFlag:false
        })
      })
      this.markers = markers;
      //console.log( this.markers)

      this.markers.forEach((marker) =>{
        marker.warning ? 
          this.positionIcon = normalIcon : 
          this.positionIcon = errorIcon

        this.icons.push(this.positionIcon)
      })
    },
    infoWindowClose (marker) {
      marker.showFlag = false
    },
    infoWindowOpen (marker) {
      marker.showFlag = true
    },
  },
};
</script>
<style lang="less" scoped>
  /deep/ .bd-map{
    width: 100%;
    height: 100%;
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