<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="1">
        <div>סך כל המחירות: {{ total }} ש"ח</div>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="-1"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
//import db from "../main";
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "עסקאות",
        align: "start",
        sortable: false,
      },
      { text: "משתמש", value: "mail", sortable: false },
      { text: "מחיר עסקה", value: "p" },
    ],
    orders: [],
    total: 0,
  }),
  async created() {
    await firebase
      .firestore()
      .collection("Orders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          let mail = data.email;
          let p = data.price;
          let temp = { mail, p };
          this.orders.push(temp);
          this.total += p;
        });
      });
    console.log(this.orders);
  },
};
</script>
