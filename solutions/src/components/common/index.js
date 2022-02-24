import Vue from "vue";
import Panel from "./Panel.vue";
import PanelHeader from '@/components/common/PanelHeader'
import PanelHeaderBg from '@/components/common/PanelHeaderBg'

// register globally
Vue.component("Panel", Panel);
Vue.component("PanelHeader", PanelHeader);
Vue.component("PanelHeaderBg", PanelHeaderBg);

