<template>
  <div class='text-center'>
  <form class="needs-validation form-signin">
      <img class="mb-4" src="../assets/img/success.png" alt width="250" height="250" />
      <p class="tips">注册成功，{{ seconds }}秒后返回登陆页面</p>
  </form>
  </div>
</template>

<script>
export default {
  name: 'registerRes',
  data: function() {
    return {
      seconds: 4
    }
  },
  methods: {
    timeGoes: function() {
      if (this.seconds > 1) {
        this.seconds--;
        setTimeout(this.timeGoes, 1000);
      } else {
        this.$router.push('/login');
      }
    }
  },
  mounted: function() {
    this.timeGoes();
  }
}
</script>

<style scoped>
.tips {
  font-size: 25px;
}
</style>