import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Login from "../components/login.vue";
import register from "../components/reg.vue";
import stat from "../components/statistics.vue";
import cart from "../components/cart.vue";
import payment from "../components/payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "register",
    component: register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/stat",
    name: "Statistics",
    component: stat,
  },
  {
    path: "/cart",
    name: "Cart",
    component: cart,
  },
  {
    path: "/pay",
    name: "pay",
    component: payment,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
