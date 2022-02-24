<template>
  <div id="app" ref="planningPage">
    <Layout />
  </div>
</template>
<script>
import Layout from "./layout/index.vue";
export default {
  name: "app",
  components: {
    Layout,
  },
  created() {},

  mounted() {
    //this.coverScale();
    this.$nextTick(function () {
      this.f();
    });

    window.onresize = () => {
      return (() => {
        this.f();
      })();
    };
  },
  computed: {
    // planningPageStyle() {
    //   return {
    //     marginTop: this.marginTop + "px",
    //     marginLeft: this.marginLeft + "px",
    //   }
    // }
  },
  methods: {
    f() {
      var app = document.getElementsByClassName("layout")[0];
      var w = window.innerWidth;
      var h = window.innerHeight;
      var scale;

      //console.log(w / h, 1920 / 1080);
      if (w / h > 1920 / 1080) {
        scale = h / 1080;
      } else {
        scale = w / 1920;
      }

      app.style.transform = `translate(-50%, -50%) scale(${scale})`;
    },

    // coverScale() {
    //   const scaleWidth = window.innerWidth / 1920;
    //   const scaleHeight = window.innerHeight / 1080;
    //   const trueWidth = 1920* scaleWidth;
    //   const trueHeight = 1080* scaleHeight;
    //   this.marginTop = (trueHeight - 1080) / 2;
    //   this.marginLeft = (trueWidth - 1920) / 2;
    //   this.$refs.planningPage.style.transform = "scale(" + scaleWidth + "," + scaleHeight + ")";
    //   window.addEventListener("resize", this.coverScale)
    // },
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.amap-logo {
  display: none;
  opacity: 0 !important;
}
.amap-copyright {
  opacity: 0;
}
.layout {
  margin: 0;
  padding: 0;
  width: 1920px !important;
  height: 1080px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}
/deep/ .el-table, /deep/.el-table__expanded-cell{
  background-color: none !important;
}

.BMap_cpyCtrl{display:none;}
.anchorBL{display:none;}
</style>
