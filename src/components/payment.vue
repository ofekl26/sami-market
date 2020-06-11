<template>
  <div align="center">
    <v-toolbar-title>תשלום</v-toolbar-title>
    <v-row justify="center">
      <v-col cols="3">
        <div>מחיר ההזמנה: {{ $route.params.sum }} ש"ח</div>
        <v-text-field label="מייל" v-model="email"></v-text-field>

        <v-text-field label="סיסמה" v-model="password"></v-text-field>

        <v-btn @click="btnclick" large color="primary">!בצע הזמנה</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "../main";
export default {
  data: () => {
    return {
      email: "",
      password: "",
      email1: "",
      pass1: "",
      uid: "",
    };
  },
  async created() {
    console.log(this.$route.params.sum);
    console.log(this.$route.params.student);
    this.email1 = firebase.auth().currentUser.email;
    this.uid = firebase.auth().currentUser.uid;
    if (this.$route.params.student) {
      await firebase
        .firestore()
        .collection("Users")
        .doc("students")
        .collection("Students")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var data = doc.data();
            this.unitdoc = doc.id;
            if (data.userID == this.uid) this.pass1 = data.password;
          });
        });
      console.log("email:", this.email1);
      console.log("pass:", this.pass1);
    }
  },
  methods: {
    async btnclick() {
      if (this.email == this.email1 && this.password == this.pass1) {
        let dr = db.collection("Orders").doc();
        let dr_id = dr.id;
        await db
          .collection("Orders")
          .doc(dr_id)
          .set({
            userID: this.uid,
            price: this.$route.params.sum,
            details: this.$store.getters.getCartArr,
            email: this.email,
          });
        this.$router.replace("/");
      } else if (this.email == "" && this.password == "") {
        window.alert(".נא למלא את כל השדות");
      }
    },
  },
};
</script>
