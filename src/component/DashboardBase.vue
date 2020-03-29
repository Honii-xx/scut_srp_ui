<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">华南理工大学校友管理平台</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item">
          <a class="nav-link">欢迎你，{{ username }}</a>
        </li>
      </ul>
      <ul class="navbar-nav px-3">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout">退出</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <slot></slot>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import '../../node_modules/jquery/dist/jquery.slim.min.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../node_modules/chart.js/dist/Chart.min.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import http from '../common/http'
import store from '../common/store'
var feather = require('../../node_modules/feather-icons/dist/feather.min.js')
export default {
  name: 'dashboard',
  data: function() {
    return {
      username: ''
    }
  },
  mounted: function() {
    feather.replace()
  },
  methods: {
    logout() {
      var vue = this
      console.log(store.state.token)
      http
        .post('/common/logout', {
          token: store.state.token
        })
        .then(function(res) {
          console.log(res.data)
          if (res.data.status == 0) {
            store.commit('setToken', '')
            vue.$router.push('/login')
          }
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  created: function() {
    this.username = store.state.username
  }
}
</script>

<style scoped>
.container {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role='main'] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role='main'] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
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

.nav-link {
  font-size: 16px;
}

.sidebar-heading {
  font-size: 18px;
}
</style>