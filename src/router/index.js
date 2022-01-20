import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FrenchView from "../views/FrenchView.vue";
import GermanView from "../views/GermanView.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/french",
        name: "french",
        component: FrenchView,
    },
    {
        path: "/german",
        name: "german",
        component: GermanView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;