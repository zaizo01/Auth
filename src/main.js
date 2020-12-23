import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(Notifications)

import {auth} from './firebase';

auth.onAuthStateChanged(user => {
  
  if (user) {
    // console.log(user);
    const detectUserr = {
      emai: user.email,
      uid: user.uid
    }
    store.dispatch('detectUser', detectUserr);
  } else {
    // console.log(user);
    store.dispatch('detectUser', user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})

