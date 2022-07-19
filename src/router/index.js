import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/",
        name: "Welcome",
        component: () => import("../components/table/tableLanding.vue"),
    },
    {
        path: "/diagnosen",
        name: "Diagnosen",
        component: () => import("../components/table/tableDiagnosen.vue"),
    },
    {
        path: "/medikation",
        name: "Medikation",
        component: () => import("../components/table/tableMedikation.vue"),
    },
    {
        path: "/vitalparameter",
        name: "Vitalparameter",
        component: () => import("../components/table/tableVitalparameter.vue"),
    },
    // {
    //     path: "/labor",
    //     name: "Labor/Viralogie",
    //     component: () => import("../components/table/tableLaborviralogie.vue"),
    // },
    {
        path: "/befunde",
        name: "Befunde",
        component: () => import("../components/table/tableBefunde.vue"),
    },
    {
        path: "/verlauf",
        name: "Verlauf",
        component: () => import("../components/table/tableVerlauf.vue"),
    },
    {
        path: "/kitteltaschenliste",
        name: "Kitteltaschenliste",
        component: () => import("../components/table/tableKitteltaschenliste.vue"),
    },
    {
        path: "/entlassorganisation",
        name: "Entlassorganisation",
        component: () => import("../components/table/tableEntlassorganisation.vue"),
    },
    {
        path: "/termine",
        name: "Termine",
        component: () => import("../components/table/tableTermine.vue"),
    },
    {
        path: "/checkliste",
        name: "Checkliste",
        component: () => import("../components/table/tableCheckliste.vue"),
    },
    {
        path: "/checkliste",
        name: "Checkliste",
        component: () => import("../components/table/tableCheckliste.vue"),
    },

    {
        path: "/:catchAll(.*)",
        name: "404-Error",
        component: () => import("../components/table/tableNotFound.vue"),
        meta: {
            requiresAuth: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;