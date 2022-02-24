<template>
  <panel style="padding:0.2rem;" height="65">
    <div class="map-conponent h100">
      <div class="index-map h100">
        <el-amap 
          ref="map"
          vid="map"
          :mapStyle="mapStyle"
          :zoom="zoom"
          :center="mapCenter"
          :clickable="true"
          :events="mapEvents">
          <el-amap-marker 
            v-for="(marker,index) in markers"
            :key="'key'+index"
            :vid="'index-'+index"
            :position="marker.position"
            :icon="marker.icon"
            :events="marker.events">
          </el-amap-marker>
          <!--<el-amap-info-window 
            v-for="(window,i) in windows"
            :key="'k'+i"
            :position="window.position" 
            :visible="window.visible" 
            :content="window.content"
            :offset="window.offset">
          </el-amap-info-window>-->
        </el-amap>
      </div>
    </div>
    <RadioGoup @handleCheckedRadio="CheckedRadio"/>
  </panel>
</template>
<script>
//import { Pixel } from 'vue-amap'
import defaultData from './mapjson.js'
import normalIcon from '../../../../assets/icon/normal.png'
import errorIcon from '../../../../assets/icon/error.png'
export default {
  name:"mapConponent",
  data () {
    return {
      mapParam:"数据总览",
      markers: null,
      windows: [],
      locationIcon:null,
      mapCenter:[120.78483, 30.74744],
      mapStyle:'amap://styles/blue',
      zoom: 10,
      labelText:null,
      mapEvents: {
        // init(o) {
        //   console.log(o)
        // },
        complete: () => {
          //根据屏幕大小自动缩放
          this.$refs.map.$$getInstance().setFitView()
        },
        click(e){
          console.log(e)
          alert(11)
        }
      }
    }
  },
  created (){
    this.getDefaultData();
  },
  mounted(){
    // this.$nextTick(function(){
    //   this.getDefaultData();
    // })
  },
  methods:{
    CheckedRadio (data) {
      this.mapParam = data;
      this.markers = [];
      this.getDefaultData();
    },
    getDefaultData () {
      let markers = [];
      //let windows = [];
      defaultData.forEach((item)=>{
        // console.log(item)
        if(this.mapParam == item.type){
          //console.log(item.data)
          item.data.forEach((subItem)=>{
            //console.log(subItem)
            subItem.warning ? this.locationIcon = normalIcon : this.locationIcon= errorIcon;
            markers.push({
              position: subItem.position,
              //label:this.labelText,
              icon:this.locationIcon,
              events: {
                init(o) {
                  console.log(o);
                },
                clickable:true,
                draggable: true,
                click (e) {
                  console.log(e)
                  alert(1111)
                  // this.windows.forEach(window => {
                  //   window.visible = false;
                  // });

                  // this.window = subItem;
                  // this.$nextTick(() => {
                  //   this.window.visible = false;
                  // });
                },
              }
            });
            // windows.push({
            //   position: subItem.position,
            //   content: subItem.label.content,
            //   offset:subItem.label.offset,
            //   visible: true,
            //   events:{
            //     init(o) {
            //       console.log(o);
            //     },
            //     click (e) {
            //       console.log(e)
            //     }
            //   }
            // });
          });
        }
      })
      this.markers = markers;
      // this.windows = windows;
      console.log(this.markers)
    },
  }

}
</script>
<style lang="less" scoped>

  /deep/.el-radio-button__inner{
    background-color: #205da5;
    color: #fff;
  }
  /deep/ .amap-icon {
    cursor: pointer;
    img {
      z-index: 99;
    }
  }
</style>