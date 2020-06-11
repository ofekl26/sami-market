<template>
  <v-container>
    <v-toolbar-title> Sami-Market</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="-1"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn small color="primary" @click="addCart(item)">
          add to cart
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    //this.$store.commit("setCartArr", this.desserts);
    //desStr = "";
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
    console.log(this.admin);
  },
  data: () => {
    return {
      email: "",
      cart: [],
      admin: false,
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
        { text: "הזמן", value: "actions", sortable: false },
      ],
      desserts: [
        {
          name: "חלב",
          company: "תנובה",
          category: "מוצרי חלב",
          price: 5,
          saleprice: 4,
        },
        {
          name: "גלידה וניל",
          company: "שטראוס",
          category: "גלידות",
          price: 27,
          saleprice: 24,
        },
        {
          name: "חלב",
          company: "טרה",
          category: "מוצרי חלב",
          price: 4,
          saleprice: 3.5,
        },
        {
          name: "גבינה לבנה",
          company: "טרה",
          category: "מוצרי חלב",
          price: 6,
          saleprice: 4.9,
        },
        {
          name: "'קוטג",
          company: "תנובה",
          category: "מוצרי חלב",
          price: 5.5,
          saleprice: 3.9,
        },
        {
          name: "ביסלי",
          company: "אסם",
          category: "חטיפים",
          price: 4,
          saleprice: 3.0,
        },
        {
          name: "במבה",
          company: "אסם",
          category: "חטיפים",
          price: 4,
          saleprice: 3.0,
        },
        {
          name: "כיף-כיף",
          company: "עלית",
          category: "חטיפים",
          price: 4,
          saleprice: 3.0,
        },
        {
          name: "קולה",
          company: "קוקה קולה",
          category: "משקאות",
          price: 14,
          saleprice: 11.9,
        },
        {
          name: "פיוז טי",
          company: "קוקה קולה",
          category: "משקאות",
          price: 14,
          saleprice: 11.9,
        },
      ],
    };
  },
  methods: {
    addCart(item) {
      if (this.admin) {
        alert("רק לקוחות יכולים להזמין מוצרים");
      } else {
        console.log(item);
        this.cart.push(item);
        console.log(this.cart);
        this.$store.commit("setCartArr", this.cart);
      }
    },
  },
};
</script>
