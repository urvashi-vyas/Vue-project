import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShoppingList from '@/components/shoppingList/ShoppingList'
import CreateIngredient from '@/components/shoppingList/CreateIngredient'
import EditIngredient from '@/components/shoppingList/EditIngredient'

Vue.use(Router)

import firebase from 'firebase/app'
require('firebase/auth')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Register',
      component: Register
    },
    {
      path: '/shopping-list',
      name: 'ShoppingList',
      component: ShoppingList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create-ingredient',
      name: 'CreateIngredient',
      component: CreateIngredient,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-ingredient/:id',
      name: 'EditIngredient',
      component: EditIngredient,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
