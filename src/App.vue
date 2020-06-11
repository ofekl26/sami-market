<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-container fluid>
          <span class="group pa-2">
            <v-btn @click="move('/')">home</v-btn>
          </span>
        </v-container>
      </div>

      <v-spacer></v-spacer>

      <!-- href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      > -->
      <!-- <span class="mr-2">Latest Release</span> -->
      <!-- <v-icon>mdi-open-in-new</v-icon> -->
      <v-btn v-if="!connected" @click="move('/login')">התחבר</v-btn>
      <v-btn v-if="!connected" @click="move('/reg')">הירשם</v-btn>
      <v-btn v-if="connected" @click="SignOut">התנתק</v-btn>
      <v-btn v-if="admin" @click="move('/stat')">הזמנות</v-btn>
      <v-btn v-if="!admin && connected" @click="move('/cart')"
        >עגלת הקניות</v-btn
      >
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import * as firebase from "firebase/app";
import "firebase/auth";
//import db from "./main";
export default {
  name: "App",

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    connected: false,
    admin: false,
    //
  }),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      try {
        if (user) {
          this.connected = true;

          console.log("user: " + user.email);
          firebase
            .firestore()
            .collection("Users")
            .doc("admins")
            .collection("Admins")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                var data = doc.data();
                this.unitdoc = doc.id;
                console.log(firebase.auth().currentUser.uid);
                let uid = firebase.auth().currentUser.uid;
                console.log("uid:", uid);
                if (data.userID == uid) this.admin = true;
              });
            });
          console.log("admin:", this.admin);
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
  methods: {
    move(path) {
      if (this.$route.path != path) {
        console.log("goes to:" + path);
        this.$router.replace(path);
      }
    },
    SignOut() {
      try {
        firebase.auth().signOut();
        this.connected = false;
        console.log("logout");
        if (this.$route.name != "HelloWorld") {
          this.move("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
