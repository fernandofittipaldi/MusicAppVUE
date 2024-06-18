import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Musicians from "./views/Musicians.vue";
import Register from "./views/Register.vue";
import EditProfile from './views/EditProfile.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  { path: "/dashboard", 
    name: "Dashboard", 
    component: Dashboard,
    meta: { requiresAuth: true } 
  },
  {
    path: "/musicians",
    name: "Musicians",
    component: Musicians,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  { path: '/edit-profile/:id', 
    name: 'EditProfile', 
    component: EditProfile, 
    meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('authToken');
//   if (to.meta.requiresAuth && !token) {
//     next('/login');
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/login');
  } else if (to.path === '/login' && token) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
