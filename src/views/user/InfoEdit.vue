<template>
  <div class="container">
    <div class="py-5 text-center">
      <h3>个人资料修改</h3>
    </div>

    <div class="alert alert-danger error-tips" v-if="show_tips" role="alert">未知错误，修改失败</div>
    <div class="alert alert-success error-tips" v-if="show_true_tips" role="alert">修改成功</div>

    <div class="row">
      <div class="col-md-8 order-md-1">
        <form class="needs-validation" novalidate>
          <h4 class="mb-3">个人信息</h4>
          <div class="mb-3">
            <label for="username">用户名</label>
            <div class="input-group">
              <input type="text" class="form-control" id="username" v-model="user.username" required />
              <div class="invalid-feedback" style="width: 100%;">请输入用户名</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="password">密码</label>
            <input type="password" class="form-control" id="password" v-model="user.password" required />
            <div class="invalid-feedback">请输入密码</div>
          </div>
          <div class="mb-3">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" v-model="user.name" required />
            <div class="invalid-feedback">请输入姓名</div>
          </div>

          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="gender">性别</label>
              <select class="custom-select d-block w-100" id="gender" v-model="user.gender" required>
                <option value=0>男</option>
                <option value=1>女</option>
              </select>
              <div class="invalid-feedback">请选择性别</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="year">出生日期</label>
              <select class="custom-select d-block w-100" id="year" v-model="user.birth_year" required>
                <option v-for="item in years" :key="item" :value="item">{{ item }}</option>
              </select>
              <div class="invalid-feedback">请选择出生日期</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="month" class="empty-label"></label>
              <select class="custom-select d-block w-100" id="month" v-model="user.birth_month" required>
                <option v-for="item in months" :key="item" :value="item">{{ item }}</option>
              </select>
              <div class="invalid-feedback">请选择出生日期</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="day" class="empty-label"></label>
              <select class="custom-select d-block w-100" id="day" v-model="user.birth_day" required>
                <option v-for="item in days" :key="item" :value="item">{{ item }}</option>
              </select>
              <div class="invalid-feedback">请选择出生日期</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="personal_id">身份证号</label>
            <div class="input-group">
              <input type="text" class="form-control" id="personal_id" disabled v-model="user.personal_id" required />
              <div class="invalid-feedback" style="width: 100%;">请输入身份证号</div>
            </div>
          </div>

          <hr class="mb-4" />
          <h4 class="mb-3">在校信息</h4>
          <div class="mb-3">
            <label for="student_id">学号</label>
            <div class="input-group">
              <input type="text" class="form-control" id="student_id" disabled v-model="user.student_id" required />
              <div class="invalid-feedback" style="width: 100%;">请输入学号</div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="start_year">入学年份</label>
              <select class="custom-select d-block w-100" id="start_year" v-model="user.start_year" required>
                <option v-for="item in years" :key="item" :value="item">{{ item }}</option>
              </select>
              <div class="invalid-feedback">请选择入学年份</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="end_year">毕业年份</label>
              <select class="custom-select d-block w-100" id="end_year" v-model="user.end_year" required>
                <option v-for="item in years" :key="item" :value="item">{{ item }}</option>
              </select>
              <div class="invalid-feedback">请选择毕业年份</div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="deparment">院系</label>
              <div class="input-group">
                <input type="text" class="form-control" id="deparment" v-model="user.department" required />
                <div class="invalid-feedback" style="width: 100%;">请输入院系</div>
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <label for="major">专业</label>
              <div class="input-group">
                <input type="text" class="form-control" id="major" v-model="user.major" required />
                <div class="invalid-feedback" style="width: 100%;">请输入专业</div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <label for="class">班级</label>
              <div class="input-group">
                <input type="text" class="form-control" id="class" v-model="user.class" required />
                <div class="invalid-feedback" style="width: 100%;">请输入班级</div>
              </div>
            </div>
          </div>

          <hr class="mb-4" />
          <h4 class="mb-3">当前信息(可选)</h4>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="phone">手机号码</label>
              <div class="input-group">
                <input type="text" class="form-control" id="phone" v-model="user.phone" />
                <div class="invalid-feedback" style="width: 100%;">请输入手机号码</div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="email">
                电子邮箱
                <span class="text-muted"></span>
              </label>
              <input type="email" class="form-control" id="email" v-model="user.email" />
            </div>
          </div>

          <div class="mb-3">
            <label for="compony">工作单位</label>
            <div class="input-group">
              <input type="text" class="form-control" id="compony" v-model="user.compony" />
            </div>
          </div>

          <div class="mb-3">
            <label for="compony_address">工作所在地</label>
            <div class="input-group">
              <input type="text" class="form-control" id="compony_address" v-model="user.compony_address" />
            </div>
          </div>

          <div class="mb-3">
            <label for="alumni_association">所属校友会</label>
            <div class="input-group">
              <input type="text" class="form-control" id="alumni_association" v-model="user.alumni_association" />
            </div>
          </div>

          <div class="mb-3">
            <label for="other">其他情况</label>
            <div class="input-group">
              <input type="text" class="form-control" id="other" v-model="user.other" />
            </div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="button" @click.prevent="submit">提交</button>
        </form>
      </div>
    </div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2019-2020 srp乱c小组</p>
    </footer>
  </div>
</template>

<script>
import '../../../node_modules/jquery/dist/jquery.slim.min.js'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import http from '../../common/http'

export default {
  name: 'register',
  data: function() {
    return {
      years: [],
      months: [],
      show_tips: false,
      show_true_tips: false,
      user: {
        username: '',
        password: '',
        name: '',
        gender: 1,
        birth_year: 0,
        birth_month: 0,
        birth_day: 0,
        personal_id: '',
        student_id: '',
        start_year: 0,
        end_year: 0,
        department: '',
        major: '',
        class: '',
        phone: '',
        email: '',
        compony: '',
        compony_address: '',
        alumni_association: '',
        other: ''
      }
    }
  },
  methods: {
    init_years: function() {
      for (var i = 1900; i <= 2030; i++) {
        this.years.push(i)
      }
    },
    init_months: function() {
      for (var i = 1; i <= 12; i++) {
        this.months.push(i)
      }
    },
    submit: function() {
      var forms = document.getElementsByClassName('needs-validation')
      var vue = this
      Array.prototype.filter.call(forms, function(form) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
        } else {
          http
            .post('/users/edit_info', vue.user)
            .then(function(res) {
              if (res.data.status == 0) {
                vue.show_true_tips = true
                vue.backTop()
              } else {
                vue.show_tips = true
                vue.backTop()
              }
            })
            .catch(function(err) {
              console.log(err)
            })
        }
      })
    },
    backTop: function() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    scrollToTop: function() {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
    },

    getUserInfo() {
      var that = this
      http.get('/users/info').then(res => {
        that.user.username = res.data.data.username
        that.user.password = res.data.data.password
        that.user.name = res.data.data.name
        that.user.gender = res.data.data.gender
        that.user.birth_year = res.data.data.birth_year
        that.user.birth_month = res.data.data.birth_month
        that.user.birth_day = res.data.data.birth_day
        that.user.personal_id = res.data.data.personal_id
        that.user.student_id = res.data.data.student_id
        that.user.start_year = res.data.data.start_year
        that.user.end_year = res.data.data.end_year
        that.user.department = res.data.data.department
        that.user.major = res.data.data.major
        that.user.class = res.data.data.class
        that.user.phone = res.data.data.phone
        that.user.email = res.data.data.email
        that.user.compony = res.data.data.compony
        that.user.compony_address = res.data.data.compony_address
        that.user.alumni_association = res.data.data.alumni_association
        that.user.other = res.data.data.other
      })
    }
  },
  mounted: function() {
    this.init_years()
    this.init_months()
    window.addEventListener('scroll', this.scrollToTop)
    this.getUserInfo()
  },
  watch: {
    $route: 'getUserInfo'
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  computed: {
    days: function() {
      var tmp_days = []
      var total_days = new Date(
        this.user.birth_year,
        this.user.birth_month,
        0
      ).getDate()
      for (var i = 1; i <= total_days; i++) {
        tmp_days.push(i)
      }
      return this.user.birth_year == 0 || this.user.birth_month == 0
        ? []
        : tmp_days
    }
  }
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.container {
  max-width: 960px;
}

.lh-condensed {
  line-height: 1.25;
}

.empty-label {
  height: 1.1em;
}

.error-tips {
  text-align: center;
}
</style>