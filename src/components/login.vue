<template>
  <div align="center">
    <v-toolbar-title>התחברות</v-toolbar-title>

    <v-row justify="center">
      <v-col cols="3">
        <v-text-field label="מייל" v-model="email"></v-text-field>

        <v-text-field label="סיסמה" v-model="password"></v-text-field>

        <v-btn @click="btnclick" large color="primary">!התחבר</v-btn>
        <div>אין לך חשבון? <router-link to="/reg"> הירשם </router-link></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    btnclick() {
      if (this.email != "" && this.password != "") {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace("/");
      } else {
        window.alert(".נא למלא את כל השדות");
      }
    },
  },
};
</script>
