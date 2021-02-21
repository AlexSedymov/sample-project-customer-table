import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@/plugins/i18n";
import Customers from "@/views/Customers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      { path: "/", name: "Customers", component: Customers },
      {
        path: "new_data",
        name: "NewData",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/NewData.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
