import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import http from '../common/http'

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
    path: '/home',
    name: 'home'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  var secret_list = ['home']
  if (to.name == 'login') {
    return next()
  }
  var student_id = window.sessionStorage.getItem('student_id')
  var token = window.sessionStorage.getItem('token')
  console.log(to)
  if (secret_list.indexOf(to.name) >= 0) {
    if (!student_id || !token) {
      return next({ name: 'login' })
    }
    http.post('/common/token_validate', {
      student_id,
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
  }
  return next()
})

export default router
