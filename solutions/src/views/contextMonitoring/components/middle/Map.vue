<template>
  <panel style="padding: 2px; margin: 0 10px" height="67.8">
    <div class="map-conponent" style="height: 100%">
      <div class="index-map" style="height: 100%">
        <el-amap
          :zoom="zoom"
          zIndex="9"
          :center="mapCenter"
          mapStyle="dark"
          :events="mapEvents"
        >
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
            :events="marker.events"
          >
          </el-amap-circle-marker>
        </el-amap>
      </div>
    </div>
  </panel>
</template>
<script>
//import dwIcon from "@/assets/img/dw.png"
export default {
  name: "mapConponent",
  data() {
    return {
      mapCenter: [120.78483, 30.74744],
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/blue");
        },
      },
      zoom: 10,
      markers: [
        //南湖
        {
          center: [120.78483, 30.74744],
          content: "标记",
          strokeColor: "#00C7FF",
          fillColor: "#00C7FF",
          events: {
            click: (event) => {
              console.log(event);
            },
          },
        },
        //秀洲
        {
          center: [120.7092, 30.76388],
          content: "标记",
          strokeColor: "#FF0000",
          fillColor: "#FF0000",
        },
        //海盐
        {
          center: [120.94579, 30.52553],
          content: "21",
          strokeColor: "#00C7FF",
          fillColor: "#00C7FF",
        },
        //嘉善
        {
          center: [120.92716, 30.83075],
          content: "44",
          strokeColor: "#FF0000",
          fillColor: "#FF0000",
        },
        // 平湖
        {
          center: [121.01606, 30.67585],
          content: "12",
          strokeColor: "#00C7FF",
          fillColor: "#00C7FF",
        },
        // 海宁市
        {
          center: [120.68102, 30.50938],
          content: "11",
          strokeColor: "#00C7FF",
          fillColor: "#00C7FF",
        },
        // 桐乡市
        {
          center: [120.56432, 30.63074],
          content: "12",
          strokeColor: "#00C7FF",
          fillColor: "#00C7FF",
        },
      ],
    };
  },
  created() {},
  mounted() {
    //this.point()
  },
  methods: {
    // point() {
    //   let icon = new this.$VueAMap.Icon({
    //     image:dwIcon,
    //     size:new this.$VueAMap.Size(2,2),
    //     imageSize:new this.$VueAMap.Size(2,2)
    //   })
    // }
  },
};
</script>
<style lang="less" scoped>
.map-conponent {

}
</style>