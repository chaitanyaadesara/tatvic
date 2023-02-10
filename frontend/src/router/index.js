import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import wikiSearch from "../views/wiki-search/index.vue";
import Login from "../views/auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
    meta: { guest: true, layout: "auth-layout" },
  },
  {
    path: "/",
    redirect: { name: "Home" },
    meta: { layout: "app-layout", checkPermission: false, routename: "Dashboard" },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { layout: "app-layout", checkPermission: false, routename: "Dashboard" },
  },
  {
    path: "/wiki",
    name: "wiki",
    component: wikiSearch,
    meta: { layout: "app-layout", checkPermission: false, routename: "wiki" },
  }
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
export default router;
