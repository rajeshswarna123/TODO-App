import { createRouter, createWebHistory, Router, RouteRecord, RouteRecordRaw } from "vue-router"

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import session from "../models/session"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/home', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
//   { path: '/messages', component: () => import("../pages/Wall.vue") },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router : Router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: "is-active",
})

router.beforeEach((to, form) =>{
  if(['/home'].includes(to.path)){
      if(!session.user){
          router.push('/login');
      }
  }
})

export default router;
