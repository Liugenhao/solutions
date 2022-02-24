import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
// 环境监控
import ContextMonitoring from '../views/contextMonitoring/index.vue'
//视频监管
import VideoSurveillance from '../views/videoSurveillance/index.vue'
//设备监管
import DeviceSupervise from '../views/deviceSupervise/index.vue'
//人员监管
import StaffSupervise from '../views/staffSupervise/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/contextMonitoring',
    name:'ContextMonitoring',
    component:ContextMonitoring
  },
  {
    path:'/videoSurveillance',
    name:'VideoSurveillance',
    component:VideoSurveillance
  },
  {
    path:'/deviceSupervise',
    name:'DeviceSupervise',
    component:DeviceSupervise
  },
  {
    path:'/staffSupervise',
    name:'StaffSupervise',
    component:StaffSupervise
  }
]

const router = new VueRouter({
  routes
})

export default router
