import { createRouter, createWebHistory, Router, RouteRecord, RouteRecordRaw } from "vue-router"

import Home from '../pages/Home.vue'
import CreatedTasks from '../pages/CreatedTasks.vue'
import AssignedTasks from '../pages/AssignedTasks.vue'
import Login from '../pages/Login.vue'
import Layout from '../components/Layout.vue'
import Signup from '../pages/Signup.vue'
import {useSession} from "../models/session"


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/tasks', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/created-tasks', component: CreatedTasks },
  { path: '/assigned-tasks', component: AssignedTasks },
  { path: '/task/:id?', component: () => import('../pages/TaskDetails.vue') },
  // { path: '/layout', component:  Layout}
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
const session = useSession();

  if(['/tasks','/','/created-tasks','/assigned-tasks'].includes(to.path)){
      if(!session.user){
          router.push('/login');
      }
  }
  else if(['/login', '/signup'].includes(to.path)){
    if(session.user){
        router.push('/tasks');
    }
}
})

export default router;
