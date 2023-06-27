import { createRouter, createWebHistory } from 'vue-router'

// requiresAuth 需登入才可瀏覽的頁面；
// requiresNoAuth 是要在未登入狀態時才可瀏覽的頁面(例：註冊頁)。
const routes = [
  {path: "/", name: "Home", component: () => import("../views/Home.vue")},
  {
    path: "/web_build",
    name: "WebBuild",
    component: () => import("../views/auth/WebBuild.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
    meta: {
      requiresNoAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  let jwt = localStorage.getItem("jwt");
  // 若有 requiresAuth，表示需登入，所以沒有 jwt 的話，就導回首頁
  if(to.meta.requiresAuth && !jwt){
    return {name: "Home"} // 導回首頁
  }
  // 若有 requiresNoAuth，表示需未登入，所以有 jwt 的話，就導回首頁
  if(to.meta.requiresNoAuth && jwt){
    return {name: "Home"} // 導回首頁
  }
})

export default router