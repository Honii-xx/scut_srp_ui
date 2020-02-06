<template>
  <div class="text-center">
    <form class="needs-validation form-signin">
      <img class="mb-4" src="../assets/img/login_logo.jpg" alt width="125" height="125" />
      <h1 class="h3 mb-3 font-weight-normal">欢迎回来，华工远航者</h1>
      <label for="username" class="sr-only">账号</label>
      <input
        id="username"
        class="form-control"
        placeholder="账号"
        v-model="username"
        required
        autofocus
      />
      <label for="password" class="sr-only">密码</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="密码"
        v-model="password"
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="true" v-model="remember_me" /> 记住我
        </label>
      </div>
      <div class="btn-group btn-block">
        <button class="btn btn-lg btn-success btn-login" @click.prevent="login">进入</button>
        <router-link class="btn btn-lg btn-info" to="/register" tag="button">注册</router-link>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2019-2020 srp乱c小组</p>
    </form>
  </div>
</template>

<script>
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import http from '../common/http'
export default {
  name: "login",
  data: function() {
    return {
      username: "",
      password: "",
      remember_me: false
    };
  },
  methods: {
    login: function() {
      if (this.username && this.password) {
        if (this.remember_me) {
          var expired = 7 * 24 * 60 * 60;
          this.$cookies.set("username", this.username, expired);
          this.$cookies.set("password", this.password, expired);
        } else {
          this.$cookies.remove("username");
          this.$cookies.remove("password");
        }
      }
      var forms = document.getElementsByClassName("needs-validation");
      var vue = this;
      Array.prototype.filter.call(forms, function(form) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          http
            .post("/common/login", {
              username: vue.username,
              password: vue.password
            })
            .then(function(res) {
              if (res.data.status == 0) {
                window.sessionStorage.setItem("student_id", vue.username);
                window.sessionStorage.setItem("token", res.data.data.token);
              } else {
                console.log("登陆失败");
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      });
    }
  },
  mounted: function() {
    if (this.$cookies.get("username") && this.$cookies.get("password")) {
      this.username = this.$cookies.get("username");
      this.password = this.$cookies.get("password");
      this.remember_me = true;
    }
  }
};
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

div.text-center {
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-login {
  margin-right: 20px;
  width: 65%;
}
</style>