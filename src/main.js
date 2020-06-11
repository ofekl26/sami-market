import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA0x5dK3vjrJRf0-nQu5AamNXXFVb8iP1I",
  authDomain: "testings-cbb7f.firebaseapp.com",
  databaseURL: "https://testings-cbb7f.firebaseio.com",
  projectId: "testings-cbb7f",
  storageBucket: "testings-cbb7f.appspot.com",
  messagingSenderId: "286560976734",
  appId: "1:286560976734:web:b549f28d6782b6345e19cf",
};
// Initialize Firebase
var firebaseapp = firebase.initializeApp(firebaseConfig);
export default firebaseapp.firestore();
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
