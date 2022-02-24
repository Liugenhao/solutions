import Vue from "vue";
import Panel from "./Panel/Panel.vue";
import PanelHeader from './Panel/PanelHeader.vue'
import PanelHeaderBg from './Panel/PanelHeaderBg.vue'
import RadioGoup from './RadioGoup/index.vue'

// register globally
Vue.component("Panel", Panel);
Vue.component("PanelHeader", PanelHeader);
Vue.component("PanelHeaderBg", PanelHeaderBg);
Vue.component("RadioGoup", RadioGoup);

