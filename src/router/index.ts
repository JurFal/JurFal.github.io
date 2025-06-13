import {createRouter, createWebHistory} from "vue-router";

import Index from "@/pages/Index.vue";
import Profile from "@/components/Profile.vue";


const routes =
    [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: '',
                    name:'IndexMain',
                    component: Profile,
                },
            ]

        },
    ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
