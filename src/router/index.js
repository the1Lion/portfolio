import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Works from "../views/Works.vue";
import Contact from "../views/Contact.vue";



const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/resume', name: 'Resume', component: Resume},
    {path: '/works', name: 'Works', component: Works},
    {path: '/contact', name: 'Contact', component: Contact},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        return (
            savedPosition ||
            new Promise((resolve) => {
                setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
            })
        );
    },
});

export default router;