import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterRes from '../views/RegisterRes.vue'
import http from '../common/http'
import store from '../common/store'
import DashboardUser from '../views/DashboardUser'
import DashboardAdmin from '../views/DashboardAdmin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/registerres',
    name: 'registerRes',
    component: RegisterRes
  },
  {
    path: '/user',
    name: 'user',
    component: DashboardUser
  },
  {
    path: '/admin',
    name: 'admin',
    component: DashboardAdmin
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  var secret_list = ['/user/', '/admin/']
  if (to.name == 'login') {
    return next()
  }
  var token = store.state.token
  for (var i =0; i < secret_list.length; i++) {
    if (to.path.indexOf(secret_list[i]) >= 0) {
      if (!token) {
        return next({ name: 'login' })
      }
      http.post('/common/token_validate', {
        path: to.path,
        token
      }).then(function (res) {
        if (res.data.status == 0) {
          return next()
        } else {
          return next({ name: 'login' })
        }
      }).catch(function (err) {
        console.log(err)
      })
      break
    }
  }
  return next()
})

export default router
