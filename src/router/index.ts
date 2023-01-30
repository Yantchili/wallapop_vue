import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/detailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: null } : { id };

    },
  },
  {
    path: "/products?:title",
    name: "searchedProduct",
    component: () =>
      import(/*webpackChunkName: searchedProduct*/ "../views/searchedProduct.vue"),
    props: (route) => {
      const title = String(route.query.title);
      return { title };

    },
  },
  {
    path: '/products',
    // name: 'allProducts',
    // component: () => import(/* webpackChunkName: "products" */ '../views/allProducts.vue')，
    children: [
      {
        name: 'allProducts',
        path: '',
        component: () => import(/* webpackChunkName: "products" */ '../views/allProducts.vue')
      },
      {
        name: "searchedProduct",
        path: '/?:title',
        component: () =>
          import(/*webpackChunkName: searchedProduct*/ "../views/searchedProduct.vue"),
      },
    ],
    props: (route) => {
      const title = String(route.query.title);
      return { title };
    }
  },
  {
    path: '/perfil',
    name: 'perfil',
    // beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "products" */ '../views/PerfilView.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "products" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "products" */ '../views/RegisterView.vue')
  },

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (getAuth().currentUser) {
      next()
    } else {
      alert("you don't have access!")
      next("/")
    }
  } else {
    next()
  }
})
export default router
