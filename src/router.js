import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Dashboard},
        {path: '/login', component: Login},
        {path: '*', redirect: '/'}
    ]
});

// router.beforeEach((to, from, next) => {
//     const publicPage = ['/login', '/', '/register'];
//     const authRequired = !publicPage.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//
//     if (authRequired && !loggedIn) {
//         return next('/login')
//     } else {
//         next();
//     }
// });

