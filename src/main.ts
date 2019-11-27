import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';

// import Cesium from './plugins/cesium'
// Cesium.Ion.defaultAccessToken = 'YOUR ION TOKEN HERE';

Vue.config.productionTip = false

import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: 'cesium/Cesium.js' //TODO: path currently not working with npm package
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch("aLoad1stDataSet").then(() => {
      // initial action must return a promise after the data is loaded sucessfully
      //this.$store.dispatch("aLoad2ndDataSet");
    });
  },
  mounted() {
    router.push("vuecesium")
  }
}).$mount('#app')
