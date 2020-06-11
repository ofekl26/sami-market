<template>
  <v-container>
    <!-- <v-toolbar-title> עגלת קניות</v-toolbar-title>
    <v-spacer></v-spacer> -->
    <!-- <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>מוצרים</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >הזמן</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.email"
                        label="מייל"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.password"
                        label="סיסמה"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">סגור</v-btn>
                <v-btn color="blue darken-1" text @click="order">הזמן</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-toolbar></template
    > -->
    <v-data-table
      :headers="headers"
      :items="$store.getters.getCartArr"
      :items-per-page="-1"
      class="elevation-1"
    >
    </v-data-table>

    <v-row justify="center">
      <v-col cols="1">
        <v-btn color="primary" @click="order">הזמן</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn color="error" @click="empty">רוקן עגלה</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data: () => ({
    student: false,
    headers: [
      {
        text: "מוצרים",
        align: "start",
        sortable: false,
      },
      { text: "מוצר", value: "name", sortable: false },
      { text: "חברה", value: "company" },
      { text: "קטגוריה", value: "category" },
      { text: "מחיר", value: "price" },
      { text: "מחיר לסטודנטים", value: "saleprice" },
    ],
    //cart: [],
  }),
  methods: {
    empty() {
      this.$store.commit("setCartArr", []);
    },
    async order() {
      console.log("order");
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
            console.log(firebase.auth().currentUser.uid);
            let uid = firebase.auth().currentUser.uid;
            console.log("uid:", uid);
            if (data.userID == uid) this.student = true;
          });
        });
      let sum = 0;
      if (this.student) {
        this.$store.getters.getCartArr.forEach(
          (element) => (sum += element.saleprice)
        );
      } else {
        this.$store.getters.getCartArr.forEach(
          (element) => (sum += element.price)
        );
      }
      console.log(sum);
      if (sum != 0)
        this.$router.replace({
          name: "pay",
          params: { sum: sum, student: this.student },
        });
    },
    // close() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },
  },
  //   created() {
  //     this.cart = this.$store.getters.getCartArr;
  //     console.log("cart", this.cart);
  //     console.log("cartArr", this.$store.state.cartArr);
  //   },
};
</script>
