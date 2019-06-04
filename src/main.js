import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
  //   primary: "#f44336",
  //   secondary: "#9575CD",
    accent: "#00e5ff"
  //   error: "#f44336",
  //   warning: "#3949AB",
  //   info: "#2196f3",
  //   success: "#4caf50"
  }
})
Vue.component('app-buy-modal', BuyModalComponent)

// import VExpansionPanels from ' @/components/VExpansionPanels ' ;
// Vue.component('v-expansion-panels', VExpansionPanels)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBIlqEx9COFlve859_F74mWPRWG6xjjKpA',
      authDomain: 'vue-shopc.firebaseapp.com',
      databaseURL: 'https://vue-shopc.firebaseio.com',
      projectId: 'vue-shopc',
      storageBucket: 'vue-shopc.appspot.com',
      messagingSenderId: '524082788725',
      appId: '1:524082788725:web:eb4829d2980c5aa7'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
