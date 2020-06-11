<template>
  <div align="center">
    <v-toolbar-title>הרשמה</v-toolbar-title>
    <v-row justify="center">
      <v-col cols="3">
        <v-text-field label="מייל" v-model="email"></v-text-field>
        <v-text-field label="סיסמה" v-model="password"></v-text-field>
        <v-radio-group v-model="radioGroup" dir="ltr">
          <v-radio dir="ltr" label="סטודנט" value="1"></v-radio>
          <v-radio dir="ltr" label="רגיל" value="0"></v-radio>
          <v-radio label="מנהל" value="2"></v-radio>
        </v-radio-group>
      </v-col> </v-row
    ><v-btn @click="btnclick" large color="primary">!הירשם</v-btn>
    <div>יש לך חשבון? <router-link to="/login"> התחבר </router-link></div>
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
      radioGroup: 0,
    };
  },
  methods: {
    async btnclick() {
      if (this.email != "" && this.password != "") {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        //firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        var uID = firebase.auth().currentUser.uid;
        var docname = uID;
        console.log(uID);
        console.log(docname);
        if (this.radioGroup == 0) {
          db.collection("Users")
            .doc("regulars")
            .collection("Regulars")
            .doc(docname)
            .set({
              email: this.email,
              password: this.password,
              userID: uID,
            });
        } else if (this.radioGroup == 1) {
          console.log(uID);
          db.collection("Users")
            .doc("students")
            .collection("Students")
            .doc(docname)
            .set({
              email: this.email,
              password: this.password,
              userID: uID,
            });
          console.log(uID);
        } else if (this.radioGroup == 2) {
          db.collection("Users")
            .doc("admins")
            .collection("Admins")
            .doc(docname)
            .set({
              email: this.email,
              password: this.password,
              userID: uID,
            });
        }

        this.$router.replace("/");
      } else {
        alert("אנא מלא את כל השדות");
      }
    },
  },
};
</script>
