import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
import VueAMap from "vue-amap";
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥
  ak: 'TSZd4oZfqZEKZxeq5DSGBrDtu1Ry1HUi'
})
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "d4c88d6d174ef2f4efc0ce8bd97c4422",
  plugin: [
    'AMap.Autocomplete', 
    'AMap.PlaceSearch', 
    'AMap.Scale', 
    'AMap.OverView', 
    'AMap.ToolBar', 
    'AMap.MapType', 
    "AMap.Marker",
    'AMap.PolyEditor', 
    "AMap.CircleMarker",
    'AMap.CircleEditor',
    "AMap.Geolocation",
    "AMap.Manager",
    "AMap.MarkerClusterer",
  ],
  v: "1.4.4",
  uiVersion: '1.0.11' // 版本号
});

import "./components/index.js"; // 注册 自定义 全局组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.css";
import "./assets/css/common.less";
import "./assets/css/media.less";


Vue.use(ElementUI);
// Vue.use(scoll);
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
