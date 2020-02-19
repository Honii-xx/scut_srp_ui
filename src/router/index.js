import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterRes from '../views/RegisterRes.vue'
import http from '../common/http'
import store from '../common/store'
import DashboardUser from '../views/user/DashboardUser'
import DashboardAdmin from '../views/admin/DashboardAdmin'
import Introduction from '../views/user/Introduction'
import CampusNews from '../views/user/CampusNews'
import ActivityInfo from '../views/user/ActivityInfo'
import AlumniNews from '../views/user/AlumniNews'
import AlumniQuery from '../views/user/AlumniQuery'
import ItemsDonate from '../views/user/ItemsDonate'
import MoneyDonate from '../views/user/MoneyDonate'
import InfoEdit from '../views/user/InfoEdit'
import MyActivity from '../views/user/MyActivity'
import DepartmentMaintain from '../views/admin/DepartmentMaintain'
import AlumniInfoQuery from '../views/admin/AlumniInfoQuery'
import StarAlumniSet from '../views/admin/StarAlumniSet'
import AlumniInfoEdit from '../views/admin/AlumniInfoEdit'
import AlumniAdd from '../views/admin/AlumniAdd'
import AlumniFromExcel from '../views/admin/AlumniFromExcel'
import NewsPublish from '../views/admin/NewsPublish'
import ActivityManage from '../views/admin/ActivityManage'
import EmailSend from '../views/admin/EmailSend'
import DonateStatistic from '../views/admin/DonateStatistic'

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
    component: DashboardUser,
    children: [{
      path: 'introduction',
      name: 'introduction',
      component: Introduction
    },{
      path: 'campusnews',
      name: 'campusnews',
      component: CampusNews
    },{
      path: 'activityinfo',
      name: 'activityinfo',
      component: ActivityInfo
    },{
      path: 'alumninews',
      name: 'alumninews',
      component: AlumniNews
    },{
      path: 'alumniquery',
      name: 'alumniquery',
      component: AlumniQuery
    },{
      path: 'itemsdonate',
      name: 'itemsdonate',
      component: ItemsDonate
    },{
      path: 'moneydonate',
      name: 'moneydonate',
      component: MoneyDonate
    },{
      path: 'infoedit',
      name: 'infoedit',
      component: InfoEdit
    },{
      path: 'myactivity',
      name: 'myactivity',
      component: MyActivity
    }]
  },
  {
    path: '/admin',
    name: 'admin',
    component: DashboardAdmin,
    children: [{
      path: 'departmentmaintain',
      name: 'departmentmaintain',
      component: DepartmentMaintain
    },{
      path: 'alumniinfoquery',
      name: 'alumniinfoquery',
      component: AlumniInfoQuery
    },{
      path: 'staralumniset',
      name: 'staralumniset',
      component: StarAlumniSet
    },{
      path: 'alumniinfoedit',
      name: 'alumniinfoedit',
      component: AlumniInfoEdit
    },{
      path: 'alumniadd',
      name: 'alumniadd',
      component: AlumniAdd
    },{
      path: 'alumnifromexcel',
      name: 'alumnifromexcel',
      component: AlumniFromExcel
    },{
      path: 'newspublish',
      name: 'newspublish',
      component: NewsPublish
    },{
      path: 'activitymanage',
      name: 'activitymanage',
      component: ActivityManage
    },{
      path: 'emailsend',
      name: 'emailsend',
      component: EmailSend
    },{
      path: 'donatestatistic',
      name: 'donatestatistic',
      component: DonateStatistic
    }]
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
